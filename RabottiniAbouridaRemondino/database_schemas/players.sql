{\rtf1\ansi\ansicpg1252\cocoartf2759
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 -- Table: public.players\
\
-- DROP TABLE IF EXISTS public.players;\
\
CREATE TABLE IF NOT EXISTS public.players\
(\
    current_club_id integer,\
    date_of_birth date,\
    height_in_cm numeric(38,2),\
    highest_market_value_in_eur numeric(38,2),\
    last_season integer,\
    market_value_in_eur numeric(38,2),\
    player_id bigint NOT NULL,\
    agent_name character varying(255) COLLATE pg_catalog."default",\
    city_of_birth character varying(255) COLLATE pg_catalog."default",\
    contract_expiration_date character varying(255) COLLATE pg_catalog."default",\
    country_of_birth character varying(255) COLLATE pg_catalog."default",\
    country_of_citizenship character varying(255) COLLATE pg_catalog."default",\
    current_club_domestic_competition_id character varying(255) COLLATE pg_catalog."default",\
    current_club_name character varying(255) COLLATE pg_catalog."default",\
    first_name character varying(255) COLLATE pg_catalog."default",\
    foot character varying(255) COLLATE pg_catalog."default",\
    image_url character varying(255) COLLATE pg_catalog."default",\
    last_name character varying(255) COLLATE pg_catalog."default",\
    name character varying(255) COLLATE pg_catalog."default",\
    player_code character varying(255) COLLATE pg_catalog."default",\
    "position" character varying(255) COLLATE pg_catalog."default",\
    sub_position character varying(255) COLLATE pg_catalog."default",\
    url character varying(255) COLLATE pg_catalog."default",\
    CONSTRAINT players_pkey PRIMARY KEY (player_id)\
)\
\
TABLESPACE pg_default;\
\
ALTER TABLE IF EXISTS public.players\
    OWNER to postgres;}