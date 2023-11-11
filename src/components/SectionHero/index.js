import { createClient } from "@/prismicio";
import Grid from "../Grid"
import { StyleSectionHero } from "./style"
import { PrismicRichText } from "@prismicio/react";

export async function SectionHero() {

    const client = createClient();

    const page = await client.getSingle("home");

    return (
        <StyleSectionHero>
           <Grid>
                <h1>{page.data.title_hero}</h1>
                <p>{page.data.text_hero}</p>

                <article>
                    <PrismicRichText field={page.data.conteudo} />
                </article>
           </Grid>
        </StyleSectionHero>
    )
}