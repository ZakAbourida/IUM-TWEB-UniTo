{\rtf1\ansi\ansicpg1252\cocoartf2759
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 -- Table: public.player_valuations\
\
-- DROP TABLE IF EXISTS public.player_valuations;\
\
CREATE TABLE IF NOT EXISTS public.player_valuations\
(\
    date date,\
    dateweek date,\
    last_season integer,\
    market_value_in_eur numeric(38,2),\
    n integer,\
    current_club_id bigint,\
    datetime timestamp(6) without time zone,\
    player_id bigint NOT NULL,\
    player_club_domestic_competition_id text COLLATE pg_catalog."default",\
    CONSTRAINT player_valuations_pkey PRIMARY KEY (player_id)\
)\
\
TABLESPACE pg_default;\
\
ALTER TABLE IF EXISTS public.player_valuations\
    OWNER to postgres;}