import { createClient } from '@supabase/supabase-js'

const URL = 'https://kioqjsdyeqnpftidyrgz.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtpb3Fqc2R5ZXFucGZ0aWR5cmd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA4NTQ0ODMsImV4cCI6MjA0NjQzMDQ4M30.kXuXZMk2qZiXktOitp-8OGAWq4prTpcH222g8NsmtLU';

export const supabase = createClient(URL, API_KEY);