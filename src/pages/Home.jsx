import Header from "../components/Header";
import { Post } from "../components/Post";

export function Home() {
    return (
        <>
            <Header />
            <Post 
                title="Título do Post" 
                text="Este é o texto do post." 
                link="/posts" 
            />
        </>
    );
}