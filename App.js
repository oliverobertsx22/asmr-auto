-- Run this in your Supabase SQL editor to set up the database

-- Videos table
CREATE TABLE IF NOT EXISTS videos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  type TEXT NOT NULL,
  duration TEXT,
  platforms TEXT[] DEFAULT '{}',
  stage TEXT DEFAULT 'ready',
  audio_url TEXT,
  video_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Video generation tasks table
CREATE TABLE IF NOT EXISTS video_tasks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  task_id TEXT UNIQUE NOT NULL,
  type TEXT,
  prompt TEXT,
  status TEXT DEFAULT 'processing',
  video_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ
);

-- Enable public access (RLS off for simplicity)
ALTER TABLE videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE video_tasks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow all" ON videos FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all" ON video_tasks FOR ALL USING (true) WITH CHECK (true);

-- Storage bucket for audio files
INSERT INTO storage.buckets (id, name, public) VALUES ('audio', 'audio', true)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Allow all audio" ON storage.objects
  FOR ALL USING (bucket_id = 'audio') WITH CHECK (bucket_id = 'audio');
