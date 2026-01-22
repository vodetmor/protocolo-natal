
// @ts-nocheck
// NOTE: This code runs is Deno (Supabase Edge Functions).
// Your editor might show red lines for "Deno" or URL imports because it expects Node.js.
// These are NOT actual errors for deployment. The code will work perfectly on Supabase.

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

console.log("GGcheckout Webhook Function Loaded")

serve(async (req: Request) => {
    try {
        // 1. Verify Method
        if (req.method !== 'POST') {
            return new Response('Method Not Allowed', { status: 405 })
        }

        // 2. Parse Payload from GGcheckout
        const payload = await req.json()
        console.log('Webhook received:', payload)

        const email = payload.email || payload.customer?.email || payload.data?.email
        const name = payload.name || payload.customer?.name || payload.data?.name || 'Novo Aluno'

        if (!email) {
            return new Response('Email is required', { status: 400 })
        }

        // 3. Initialize Supabase Admin Client
        const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? ''
        const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''

        if (!supabaseUrl || !supabaseServiceKey) {
            throw new Error('Missing Supabase Environment Variables')
        }

        const supabase = createClient(supabaseUrl, supabaseServiceKey)

        // 4. Generate Temporary Password
        const password = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);

        // 5. Create User
        const { data: user, error: createError } = await supabase.auth.admin.createUser({
            email: email,
            password: password,
            email_confirm: true,
            user_metadata: {
                full_name: name,
                source: 'ggcheckout'
            }
        })

        if (createError) {
            console.error('Error creating user:', createError)
            // Check if user already exists
            if (createError.message.includes('already registered')) {
                return new Response(JSON.stringify({ message: 'User already exists', email }), {
                    headers: { 'Content-Type': 'application/json' },
                    status: 200
                })
            }
            return new Response(JSON.stringify({ error: createError.message }), { status: 400 })
        }

        // 6. Log Success (Email sending logic would go here)
        console.log(`User created: ${email} / ${password}`)

        return new Response(
            JSON.stringify({ message: 'User created successfully', userId: user.user.id }),
            { headers: { "Content-Type": "application/json" } },
        )
    } catch (error: any) {
        console.error('Unexpected error:', error)
        const errorMessage = error instanceof Error ? error.message : String(error)
        return new Response(JSON.stringify({ error: errorMessage }), {
            headers: { "Content-Type": "application/json" },
            status: 500,
        })
    }
})
