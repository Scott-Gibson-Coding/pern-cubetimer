-- Simple commands for creating the database and table for PERN-cubetimer

CREATE DATABASE perncubetimer;

CREATE TABLE solvetimes (
    time_id SERIAL PRIMARY KEY,
    solvetime double precision NOT NULL
);