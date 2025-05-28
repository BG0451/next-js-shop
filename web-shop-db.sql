--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3
-- Dumped by pg_dump version 16.3

-- Started on 2025-05-28 21:46:49

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 216 (class 1259 OID 16410)
-- Name: games; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.games (
    game_id integer NOT NULL,
    title character varying(255) NOT NULL,
    price real NOT NULL,
    release_date character varying,
    sale real DEFAULT 0
);


ALTER TABLE public.games OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16409)
-- Name: Games_GameID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.games ALTER COLUMN game_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Games_GameID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 218 (class 1259 OID 16422)
-- Name: tags; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tags (
    tag_id integer NOT NULL,
    tag character varying(255) NOT NULL
);


ALTER TABLE public.tags OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16421)
-- Name: Tags_TagID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.tags ALTER COLUMN tag_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Tags_TagID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 219 (class 1259 OID 16427)
-- Name: game_tags; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.game_tags (
    game_id integer NOT NULL,
    tag_id integer NOT NULL,
    primary_id integer NOT NULL
);


ALTER TABLE public.game_tags OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16459)
-- Name: game_tags_primary_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.game_tags ALTER COLUMN primary_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.game_tags_primary_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 4856 (class 0 OID 16427)
-- Dependencies: 219
-- Data for Name: game_tags; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.game_tags (game_id, tag_id, primary_id) OVERRIDING SYSTEM VALUE VALUES (1, 1, 1);
INSERT INTO public.game_tags (game_id, tag_id, primary_id) OVERRIDING SYSTEM VALUE VALUES (1, 2, 2);
INSERT INTO public.game_tags (game_id, tag_id, primary_id) OVERRIDING SYSTEM VALUE VALUES (2, 1, 3);
INSERT INTO public.game_tags (game_id, tag_id, primary_id) OVERRIDING SYSTEM VALUE VALUES (2, 2, 4);
INSERT INTO public.game_tags (game_id, tag_id, primary_id) OVERRIDING SYSTEM VALUE VALUES (2, 4, 5);
INSERT INTO public.game_tags (game_id, tag_id, primary_id) OVERRIDING SYSTEM VALUE VALUES (2, 7, 6);
INSERT INTO public.game_tags (game_id, tag_id, primary_id) OVERRIDING SYSTEM VALUE VALUES (3, 5, 7);
INSERT INTO public.game_tags (game_id, tag_id, primary_id) OVERRIDING SYSTEM VALUE VALUES (3, 7, 8);
INSERT INTO public.game_tags (game_id, tag_id, primary_id) OVERRIDING SYSTEM VALUE VALUES (4, 2, 9);
INSERT INTO public.game_tags (game_id, tag_id, primary_id) OVERRIDING SYSTEM VALUE VALUES (5, 3, 10);
INSERT INTO public.game_tags (game_id, tag_id, primary_id) OVERRIDING SYSTEM VALUE VALUES (5, 4, 11);
INSERT INTO public.game_tags (game_id, tag_id, primary_id) OVERRIDING SYSTEM VALUE VALUES (5, 6, 12);
INSERT INTO public.game_tags (game_id, tag_id, primary_id) OVERRIDING SYSTEM VALUE VALUES (6, 6, 13);


--
-- TOC entry 4853 (class 0 OID 16410)
-- Dependencies: 216
-- Data for Name: games; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.games (game_id, title, price, release_date, sale) OVERRIDING SYSTEM VALUE VALUES (4, 'Disco Elysium', 39.99, '15 Oct, 2019', 0);
INSERT INTO public.games (game_id, title, price, release_date, sale) OVERRIDING SYSTEM VALUE VALUES (6, 'Wildfrost', 19.49, '12 Apr, 2023', 0);
INSERT INTO public.games (game_id, title, price, release_date, sale) OVERRIDING SYSTEM VALUE VALUES (1, 'Red Dead Redemption 2', 59.99, '5 Dec, 2019', 0.9);
INSERT INTO public.games (game_id, title, price, release_date, sale) OVERRIDING SYSTEM VALUE VALUES (3, 'Dead Space', 59.99, '27 Jan, 2023', 0.5);
INSERT INTO public.games (game_id, title, price, release_date, sale) OVERRIDING SYSTEM VALUE VALUES (5, 'Baba Is You', 12.49, '13 Mar, 2019', 0.8);
INSERT INTO public.games (game_id, title, price, release_date, sale) OVERRIDING SYSTEM VALUE VALUES (2, 'Outer Wilds', 22.99, '18 Jun, 2020', 0.5);


--
-- TOC entry 4855 (class 0 OID 16422)
-- Dependencies: 218
-- Data for Name: tags; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.tags (tag_id, tag) OVERRIDING SYSTEM VALUE VALUES (1, 'Adventure');
INSERT INTO public.tags (tag_id, tag) OVERRIDING SYSTEM VALUE VALUES (2, 'Story Rich');
INSERT INTO public.tags (tag_id, tag) OVERRIDING SYSTEM VALUE VALUES (3, 'Indie');
INSERT INTO public.tags (tag_id, tag) OVERRIDING SYSTEM VALUE VALUES (4, 'Puzzle');
INSERT INTO public.tags (tag_id, tag) OVERRIDING SYSTEM VALUE VALUES (5, 'Horror');
INSERT INTO public.tags (tag_id, tag) OVERRIDING SYSTEM VALUE VALUES (6, 'Difficult');
INSERT INTO public.tags (tag_id, tag) OVERRIDING SYSTEM VALUE VALUES (7, 'Space');


--
-- TOC entry 4863 (class 0 OID 0)
-- Dependencies: 215
-- Name: Games_GameID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Games_GameID_seq"', 6, true);


--
-- TOC entry 4864 (class 0 OID 0)
-- Dependencies: 217
-- Name: Tags_TagID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Tags_TagID_seq"', 7, true);


--
-- TOC entry 4865 (class 0 OID 0)
-- Dependencies: 220
-- Name: game_tags_primary_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.game_tags_primary_id_seq', 13, true);


--
-- TOC entry 4700 (class 2606 OID 16414)
-- Name: games Games_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT "Games_pkey" PRIMARY KEY (game_id);


--
-- TOC entry 4702 (class 2606 OID 16426)
-- Name: tags Tags_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT "Tags_pkey" PRIMARY KEY (tag_id);


--
-- TOC entry 4706 (class 2606 OID 16466)
-- Name: game_tags game_tags_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.game_tags
    ADD CONSTRAINT game_tags_pkey PRIMARY KEY (primary_id);


--
-- TOC entry 4703 (class 1259 OID 16446)
-- Name: fki_GameID_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "fki_GameID_fk" ON public.game_tags USING btree (game_id);


--
-- TOC entry 4704 (class 1259 OID 16435)
-- Name: fki_TagID_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "fki_TagID_fk" ON public.game_tags USING btree (game_id);


--
-- TOC entry 4707 (class 2606 OID 16441)
-- Name: game_tags game_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.game_tags
    ADD CONSTRAINT game_id_fk FOREIGN KEY (game_id) REFERENCES public.games(game_id) NOT VALID;


--
-- TOC entry 4708 (class 2606 OID 16447)
-- Name: game_tags tag_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.game_tags
    ADD CONSTRAINT tag_id_fk FOREIGN KEY (tag_id) REFERENCES public.tags(tag_id) NOT VALID;


-- Completed on 2025-05-28 21:46:49

--
-- PostgreSQL database dump complete
--

