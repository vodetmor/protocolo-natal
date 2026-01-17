import { createClient } from '@supabase/supabase-js';

// Load env vars (simulated since we can't fully load Vite env here easily without setup)
const SUPABASE_URL = 'https://ridztjcycoxqjiuwarvx.supabase.co';
const SUPABASE_KEY = 'sb_publishable_gkOZbT54htURNiuDCFaluw_T4riAKBY';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function checkDatabase() {
    console.log('Checking Supabase connection...');

    // 1. Check if we can connect
    const { data: health, error: healthError } = await supabase.from('profiles').select('count', { count: 'exact', head: true });

    if (healthError) {
        console.error('Error connecting/reading profiles:', healthError);
    } else {
        console.log('Profiles table access successful.');
    }

    // 2. Check daily_progress
    const { data: progress, error: progressError } = await supabase.from('daily_progress').select('count', { count: 'exact', head: true });

    if (progressError) {
        console.error('Error connecting/reading daily_progress:', progressError);
    } else {
        console.log('Daily_progress table access successful.');
    }
}

checkDatabase();
