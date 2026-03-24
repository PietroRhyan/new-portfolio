import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function AboutMe() {
  return (
    <div className="w-auto flex flex-col items-center gap-6">
      <Tabs defaultValue="aboutme" className="w-full flex items-center" >
        <TabsList >
          <TabsTrigger value="aboutme">Sobre</TabsTrigger>
          <TabsTrigger value="skills">Habilidades</TabsTrigger>
        </TabsList>
        <TabsContent value="aboutme" >
          <div className="max-w-[454px] min-h-[570px] w-full flex flex-col gap-4 mx-auto">
            <p className="text-sm text-foreground/80">
              Fui introduzido ao mundo do desenvolvimento de software desde a minha ingressão ao curso de TI no Instituto Federal da Bahia em 2017. Fazendo apps, diagramas de arquitetura de software e mexendo com ponteiros em C++ e outros. Eu fiquei apaixonado por esta área e fui me interessando mais e mais.
            </p>

            <p className="text-sm text-foreground/80">
              Participei de campeonatos de programação, do qual fui vice-campeão em uma das edições - competia com os amigos sobre quem fazia o melhor programa (mais eficiente com menos linhas haha), me juntava para criarmos alguns websites e etc... Experiências que me tiravam da zona de conforto para conhecer mais sobre e aplicar no casos que eu estava inserido.
            </p>

            <p className="text-sm text-foreground/80">
              Em 2021 dei início a minha graduação como Bacharelado em Ciências da Computação. No mesmo ano consegui passar em um processo seletivo para ser Trainee de uma empresa de tecnologia de Fortaleza, da qual me ofereceu uma bolsa de estudos que pude aproveitar e ver cursos por fora, além da faculdade.
            </p>

            <p className="text-sm text-foreground/80">
              Em 2022 construí a Fros Venture junto com amigos, um projeto muito massa que fizemos para ganhar experiência real e que nos ajudou bastante. Durante 2023 passei por situações complicadas na vida pessoal, me obrigando a trancar a faculdade. Apesar das dificuldades, são os problemas que encontramos durante a vida que fazem com que conquistemos novos níveis. Pude trabalhar como TI na Secretaria da minha cidade e em 2024 pude estar atuando como Desenvolvedor Frontend em uma empresa de SC, da qual atuo até hoje, dando sugestões que impactam milhares de clientes e liderando em diversas funcionalidades.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="skills">
          <div className="max-w-[454px] min-h-[570px] w-full flex flex-col gap-4 mx-auto">
            <p className="text-sm text-foreground/80">
              <strong>Linguagens</strong>: JavaScript, Typescript, Python, C++;
            </p>

            <p className="text-sm text-foreground/80">
              <strong>Frameworks</strong>: React, Next.js, Node.js, Express, Flask, Angular;

            </p>

            <p className="text-sm text-foreground/80">
              <strong>Infra/ DevOps</strong>: AWS, Docker, CI/CD, Azure DevOps;

            </p>

            <p className="text-sm text-foreground/80">
              <strong>Bandos de Dados</strong>: PostgreSQL, MySQL, MongoDB, Redis;
            </p>
          </div>
        </TabsContent>
      </Tabs>


    </div>
  )
}