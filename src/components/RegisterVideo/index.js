import { StyledRegisterVideo } from "./styles";
import React from "react"

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

export default function RegisterVideo() {

    const formCadastro = useForm({
            initialValue: {titulo: "Lula lá", url: "https://google.com.br"}
    });

    const [formVisivel, setFormVisivel] = React.useState(true);

    return (
        <StyledRegisterVideo>
            <button class="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            
            {formVisivel
                ?(
                    <form onSubmit={(evento) => {
                        evento.preventDefault();
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