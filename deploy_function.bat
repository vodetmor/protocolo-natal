@echo off
echo Deploying GGcheckout Webhook to Supabase...
echo.
call npx supabase functions deploy ggcheckout-webhook --project-ref ridztjcycoxqjiuwarvx --no-verify-jwt
echo.
pause
