import ProjectCard from "../components/ProjectCard.tsx";
import { projects } from "../../data/projects.ts";

const Home = () => {
    return (
        <div className="min-h-dvh bg-white text-gray-900">
            <main className="mx-auto max-w-5xl p-4">
                <h2 className="text-2xl font-bold mb-4">Projects</h2>
                <section className="grid gap-4 sm:grid-cols-2">
                    { projects.map(p => (
                        <ProjectCard key={ p.title } { ...p } />
                    )) }
                </section>
            </main>
        </div>
    );
};
export default Home;
