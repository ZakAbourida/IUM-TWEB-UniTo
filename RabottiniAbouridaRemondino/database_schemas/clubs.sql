{\rtf1\ansi\ansicpg1252\cocoartf2759
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 -- Table: public.clubs\
\
-- DROP TABLE IF EXISTS public.clubs;\
\
CREATE TABLE IF NOT EXISTS public.clubs\
(\
    average_age double precision,\
    foreigners_number integer,\
    foreigners_percentage double precision,\
    last_season integer,\
    national_team_players integer,\
    squad_size integer,\
    stadium_seats integer,\
    total_market_value numeric(38,2),\
    club_id bigint NOT NULL,\
    club_code character varying(255) COLLATE pg_catalog."default",\
    coach_name character varying(255) COLLATE pg_catalog."default",\
    domestic_competition_id character varying(255) COLLATE pg_catalog."default",\
    name character varying(255) COLLATE pg_catalog."default",\
    net_transfer_record character varying(255) COLLATE pg_catalog."default",\
    stadium_name character varying(255) COLLATE pg_catalog."default",\
    url character varying(255) COLLATE pg_catalog."default",\
    CONSTRAINT clubs_pkey PRIMARY KEY (club_id)\
)\
\
TABLESPACE pg_default;\
\
ALTER TABLE IF EXISTS public.clubs\
    OWNER to postgres;}