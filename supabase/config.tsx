import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
    'https://mudrbpuhgusnvrffniak.supabase.co',
    'sb_publishable_vDLsVmoPELp0C9uGi_fRBA_AYCt6hyp'
)