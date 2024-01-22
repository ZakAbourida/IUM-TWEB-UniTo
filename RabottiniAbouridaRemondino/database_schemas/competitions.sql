{\rtf1\ansi\ansicpg1252\cocoartf2759
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 -- Table: public.competitions\
\
-- DROP TABLE IF EXISTS public.competitions;\
\
CREATE TABLE IF NOT EXISTS public.competitions\
(\
    country_id integer,\
    competition_code character varying(255) COLLATE pg_catalog."default",\
    competition_id character varying(255) COLLATE pg_catalog."default" NOT NULL,\
    confederation character varying(255) COLLATE pg_catalog."default",\
    country_name character varying(255) COLLATE pg_catalog."default",\
    domestic_league_code character varying(255) COLLATE pg_catalog."default",\
    name character varying(255) COLLATE pg_catalog."default",\
    sub_type character varying(255) COLLATE pg_catalog."default",\
    type character varying(255) COLLATE pg_catalog."default",\
    url character varying(255) COLLATE pg_catalog."default",\
    CONSTRAINT competitions_pkey PRIMARY KEY (competition_id)\
)\
\
TABLESPACE pg_default;\
\
ALTER TABLE IF EXISTS public.competitions\
    OWNER to postgres;}