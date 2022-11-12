import { StyledRegisterVideo } from "./styles";
import React from "react"
import { createClient } from '@supabase/supabase-js'


function useForm(props) {
    
    const [values, setValues] = React.useState(props.initialValue);

    
    return {
        values,
        handleChange: (event) => {
            const value = event.target.value;
            const name = event.target.name;
            setValues({
                ...values,
                [name]: value
            });
        },
        clearForm() {
            setValues({});
        }
    };
}

const PROJECT_URL = "https://qxgixagbsmzhwnovpolr.supabase.co"
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4Z2l4YWdic216aHdub3Zwb2xyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyNjE1MzYsImV4cCI6MTk4MzgzNzUzNn0.ioVSubjDlhk-75m2iGRSNGnBvYUfIg7E3EzOvQsYO_Y"
const supabase = createClient(PROJECT_URL, PUBLIC_KEY)

function getThumbnail(url) {
    return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}


export default function RegisterVideo() {

    const formCadastro = useForm({
            initialValue: {titulo: "", url: "https://www.youtube.com/watch?v=hX92wkU1bSk"}
    });

    const [formVisivel, setFormVisivel] = React.useState(false);

    return (
        <StyledRegisterVideo>
            <button class="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            
            {formVisivel
                ?(
                    <form onSubmit={(evento) => {
                        evento.preventDefault();

                        supabase.from("video").insert({
                            title: formCadastro.values.titulo,
                            url: formCadastro.values.url,
                            thumb: getThumbnail(formCadastro.values.url),
                            playlist: "Propostas"
                        })
                        .then((success) => {
                            console.log(success);
                        })
                        .catch((err) => {
                            console.log(err);
                        })


                        setFormVisivel(false);
                        formCadastro.clearForm();
                    }}>
                        <div>
                            <button className="close-modal" onClick={() => setFormVisivel(false)}>
                                X
                            </button>
                            <input placeholder="Título do vídeo" name="titulo" value={formCadastro.values.titulo} onChange={formCadastro.handleChange}/>
                            <input placeholder="URL" name="url" value={formCadastro.values.url} onChange={formCadastro.handleChange}/>
                            <button type="submit">
                                Cadastrar Vídeo
                            </button>
                            
                        </div>
                    </form>
                )
                : false}
        </StyledRegisterVideo>
    )
}