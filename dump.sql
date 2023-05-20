--
-- PostgreSQL database dump
--

-- Dumped from database version 12.14 (Ubuntu 12.14-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.14 (Ubuntu 12.14-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: shortlinks; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.shortlinks (
    id integer NOT NULL,
    userid integer NOT NULL,
    url text NOT NULL,
    shorturl text NOT NULL,
    visitcount integer DEFAULT 0,
    dataposted timestamp without time zone DEFAULT now()
);


--
-- Name: shortlinks_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.shortlinks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: shortlinks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.shortlinks_id_seq OWNED BY public.shortlinks.id;


--
-- Name: tokens; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tokens (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    userid integer
);


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    email character varying(50) NOT NULL,
    password text NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: shortlinks id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.shortlinks ALTER COLUMN id SET DEFAULT nextval('public.shortlinks_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: shortlinks; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.shortlinks VALUES (9, 7, 'https://...', 'BY_fip6VRyxcSMCBqPNcu', 0, '2023-05-20 14:09:23.388849');
INSERT INTO public.shortlinks VALUES (10, 7, 'https://...', 'mGV65AmP1QND3Bt1_sj-2', 0, '2023-05-20 14:09:23.829886');
INSERT INTO public.shortlinks VALUES (11, 7, 'https://...', 'PGaMe9c06eZyFIr40cRkY', 0, '2023-05-20 14:09:24.23427');
INSERT INTO public.shortlinks VALUES (6, 7, 'https://...', 'up35NO8MStx_iHPSh0NpH', 3, '2023-05-20 14:09:21.586145');
INSERT INTO public.shortlinks VALUES (12, 8, 'https://google.com', 'LJNmvJDWuKfLiuFKtLtin', 0, '2023-05-20 17:18:29.57327');
INSERT INTO public.shortlinks VALUES (13, 8, 'https://google.com', '9uQv_YDfLEfhL6XCSKiDT', 0, '2023-05-20 17:18:32.138232');


--
-- Data for Name: tokens; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.tokens VALUES ('ca6b38c7-11f9-40ff-bb64-456b85a222aa', 7);
INSERT INTO public.tokens VALUES ('026b4acf-5d0a-43a3-9a69-f9d33ca2c5bb', 7);
INSERT INTO public.tokens VALUES ('05292653-2257-46e4-9745-4767ac12e25a', 8);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (7, 'João', 'joao@driven.com.br', '$2b$10$4gLCbgGumcRr3VQZWtHUNuj81lP.6VveYo5JH76Sq0mAhhqt8HzpK');
INSERT INTO public.users VALUES (8, 'Gabriel', 'Gabriel@driven.com.br', '$2b$10$KRQcNrtsOITBdAYVvownU.pWLyg19AD.8tjra6wY2KZyS.KYFEMVe');


--
-- Name: shortlinks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.shortlinks_id_seq', 13, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 8, true);


--
-- Name: shortlinks shortlinks_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.shortlinks
    ADD CONSTRAINT shortlinks_pkey PRIMARY KEY (id);


--
-- Name: tokens tokens_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tokens
    ADD CONSTRAINT tokens_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: shortlinks shortlinks_userid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.shortlinks
    ADD CONSTRAINT shortlinks_userid_fkey FOREIGN KEY (userid) REFERENCES public.users(id);


--
-- Name: tokens tokens_userid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tokens
    ADD CONSTRAINT tokens_userid_fkey FOREIGN KEY (userid) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

