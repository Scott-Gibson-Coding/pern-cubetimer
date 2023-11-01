-- Simple commands for creating the database and table for PERN-cubetimer

CREATE DATABASE perncubetimer;

-- Table: public.solvetimes

-- DROP TABLE IF EXISTS public.solvetimes;

CREATE TABLE IF NOT EXISTS public.solvetimes (
    time_id SERIAL PRIMARY KEY,
    solvetime INTEGER NOT NULL
);