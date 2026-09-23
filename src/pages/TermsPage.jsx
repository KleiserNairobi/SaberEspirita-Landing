import React from "react";
import LegalHeader from "../components/LegalHeader";
import Footer from "../components/Footer";
import { VineBranch, VineWatermark } from "../components/Shared";
import { FileText, ShieldCheck, Mail, Calendar, Sparkles } from "lucide-react";

const TermsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-sage-50 text-sage-500 selection:bg-sage-200 selection:text-sage-500">
      <LegalHeader />

      <main className="flex-grow py-12 md:py-16 relative overflow-hidden">
        <VineWatermark className="top-10 -right-20 opacity-10" />
        <VineWatermark className="bottom-40 -left-20 opacity-10 rotate-180" />

        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          {/* Badge e Título */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-sage-200 text-xs font-semibold text-sage-400 mb-4 shadow-sm">
              <FileText className="w-3.5 h-3.5 text-sage-300" />
              <span>Documento Legal</span>
            </div>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-sage-500 mb-4 tracking-tight">
              Termos de Uso
            </h1>
            <p className="text-sage-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Condições e diretrizes para utilização do aplicativo{" "}
              <strong className="text-sage-500 font-semibold">Saber Espírita</strong>.
            </p>
          </div>

          {/* Cartão de Conteúdo Principal */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl shadow-sage-200/40 border border-sage-100 space-y-8 text-sage-400 leading-relaxed text-sm md:text-base">
            
            <div className="p-4 sm:p-5 rounded-2xl bg-sage-50 border border-sage-200/70 flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-sage-300 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-sage-500 leading-relaxed">
                Ao utilizar o aplicativo <strong>Saber Espírita</strong>, você concorda com os termos abaixo. Se você não concordar, por favor, não continue a usar o aplicativo.
              </p>
            </div>

            <section className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-sage-500 pb-2 border-b border-sage-100 flex items-center gap-2">
                <span className="text-sage-300 text-lg">1.</span> Uso do Aplicativo
              </h2>
              <ul className="space-y-3 pl-1 sm:pl-2">
                <li className="flex items-start gap-2.5">
                  <span className="font-semibold text-sage-500 shrink-0">1.1</span>
                  <span>
                    O aplicativo <strong>"Saber Espírita"</strong> tem como propósito promover o aprendizado e a divulgação da <strong>doutrina espírita</strong>, por meio de cursos, estudos, quizzes interativos que incentivam a autoavaliação, preces e reflexões diárias. Seu uso é destinado a fins educativos e edificantes.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-semibold text-sage-500 shrink-0">1.2</span>
                  <span>
                    Espera-se que os usuários utilizem o aplicativo de forma ética e responsável, respeitando os princípios da doutrina espírita e os termos aqui descritos. O uso inadequado, ofensivo ou ilegal não é permitido.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-semibold text-sage-500 shrink-0">1.3</span>
                  <span>
                    Embora o conteúdo tenha sido elaborado com rigor doutrinário e dedicação, o aplicativo não se responsabiliza por eventuais interpretações incorretas ou aplicações individuais das informações fornecidas.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-semibold text-sage-500 shrink-0">1.4</span>
                  <span>
                    É vedada a utilização do aplicativo de forma abusiva ou automatizada, incluindo, mas não se limitando, à criação, exclusão ou recriação repetitiva de contas, tentativas de contornar restrições de acesso, manipulação de funcionalidades, uso de robôs, scripts ou qualquer prática que comprometa a segurança, estabilidade ou funcionamento da plataforma.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-semibold text-sage-500 shrink-0">1.5</span>
                  <span>
                    A critério da administração, contas que apresentem indícios de uso abusivo, fraude, spam ou qualquer conduta incompatível com estes Termos poderão ser suspensas ou encerradas, temporária ou definitivamente, independentemente de aviso prévio.
                  </span>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-sage-500 pb-2 border-b border-sage-100 flex items-center gap-2">
                <span className="text-sage-300 text-lg">2.</span> Propriedade Intelectual
              </h2>
              <ul className="space-y-3 pl-1 sm:pl-2">
                <li className="flex items-start gap-2.5">
                  <span className="font-semibold text-sage-500 shrink-0">2.1</span>
                  <span>
                    Todos os direitos de propriedade intelectual relacionados ao aplicativo "Saber Espírita", incluindo mas não se limitando a design, gráficos, texto, ilustrações, imagens e código, são de propriedade exclusiva de <strong>Kleiser Nairobi de Oliveira</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-semibold text-sage-500 shrink-0">2.2</span>
                  <span>
                    Você não possui o direito de reproduzir, modificar, distribuir ou criar obras derivadas com base no aplicativo sem o consentimento expresso e por escrito do autor.
                  </span>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-sage-500 pb-2 border-b border-sage-100 flex items-center gap-2">
                <span className="text-sage-300 text-lg">3.</span> Conteúdo do Usuário
              </h2>
              <ul className="space-y-3 pl-1 sm:pl-2">
                <li className="flex items-start gap-2.5">
                  <span className="font-semibold text-sage-500 shrink-0">3.1</span>
                  <span>
                    O aplicativo pode permitir que você insira um nome ou apelido na tela de identificação para personalizar sua experiência. No entanto, você concorda em não inserir nomes ou conteúdo ofensivo, difamatório, ilegal ou que viole os direitos de terceiros.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-semibold text-sage-500 shrink-0">3.2</span>
                  <span>
                    Você mantém a propriedade do conteúdo que insere no aplicativo, mas concede a Kleiser Nairobi de Oliveira uma licença não exclusiva, global, irrevogável e sublicenciável para usá-lo, reproduzi-lo, modificá-lo e exibi-lo no contexto do aplicativo.
                  </span>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-sage-500 pb-2 border-b border-sage-100 flex items-center gap-2">
                <span className="text-sage-300 text-lg">4.</span> Limitação de Responsabilidade
              </h2>
              <ul className="space-y-3 pl-1 sm:pl-2">
                <li className="flex items-start gap-2.5">
                  <span className="font-semibold text-sage-500 shrink-0">4.1</span>
                  <span>
                    O aplicativo "Saber Espírita" é fornecido "no estado em que se encontra", sem garantias de qualquer tipo, expressas ou implícitas. Não garantimos a precisão, confiabilidade ou disponibilidade contínua e ininterrupta do aplicativo.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-semibold text-sage-500 shrink-0">4.2</span>
                  <span>
                    Kleiser Nairobi de Oliveira não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais decorrentes do uso ou da impossibilidade de uso do aplicativo.
                  </span>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-sage-500 pb-2 border-b border-sage-100 flex items-center gap-2">
                <span className="text-sage-300 text-lg">5.</span> Idade Mínima e Consentimento Parental
              </h2>
              <p>
                O uso do aplicativo está autorizado apenas para pessoas com idade igual ou superior a <strong>13 anos</strong>. Se você for menor de 18 anos, é necessário obter o consentimento de seus pais ou responsáveis legais para utilizar o aplicativo.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-sage-500 pb-2 border-b border-sage-100 flex items-center gap-2">
                <span className="text-sage-300 text-lg">6.</span> Conformidade com Leis de Proteção de Dados
              </h2>
              <p>
                Ao utilizar o aplicativo, você declara estar ciente de que seus dados serão tratados de acordo com as legislações de proteção de dados aplicáveis, incluindo a <strong>Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong> no Brasil, o <strong>Regulamento Geral sobre a Proteção de Dados (GDPR)</strong> na União Europeia e a <strong>Children's Online Privacy Protection Act (COPPA)</strong> nos Estados Unidos, quando aplicável.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-sage-500 pb-2 border-b border-sage-100 flex items-center gap-2">
                <span className="text-sage-300 text-lg">7.</span> Serviços de Terceiros
              </h2>
              <p>
                O aplicativo pode integrar serviços de terceiros para funcionalidades como autenticação (incluindo Google Sign-In e Apple Sign-In), armazenamento em nuvem, análise de estabilidade e envio de notificações. Esses serviços possuem suas próprias políticas de privacidade e termos de uso, tratando informações conforme suas respectivas diretrizes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-sage-500 pb-2 border-b border-sage-100 flex items-center gap-2">
                <span className="text-sage-300 text-lg">8.</span> Alterações nos Termos de Uso
              </h2>
              <p>
                Reservamo-nos o direito de modificar ou atualizar estes Termos de Uso a qualquer momento. Quaisquer alterações significativas serão notificadas através do aplicativo ou em nosso site oficial.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-sage-500 pb-2 border-b border-sage-100 flex items-center gap-2">
                <span className="text-sage-300 text-lg">9.</span> Contato
              </h2>
              <p>
                Se você tiver alguma dúvida ou preocupação relacionada a estes Termos de Uso ou ao funcionamento do aplicativo, entre em contato conosco pelo e-mail:
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sage-50 text-sage-500 font-semibold border border-sage-200">
                <Mail className="w-4 h-4 text-sage-300" />
                <a href="mailto:app.saberespirita@gmail.com" className="hover:underline">
                  app.saberespirita@gmail.com
                </a>
              </div>
            </section>

            <div className="pt-6 border-t border-sage-100 flex items-center justify-between flex-wrap gap-4 text-xs text-sage-400">
              <span className="flex items-center gap-1.5 font-medium">
                <Calendar className="w-3.5 h-3.5 text-sage-300" />
                Última Atualização: 01/07/2025
              </span>
              <span className="italic font-serif">
                Saber Espírita — Iluminando mentes, confortando corações.
              </span>
            </div>

          </div>

          <div className="mt-12 text-center">
            <VineBranch className="w-48 mx-auto opacity-70" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsPage;
