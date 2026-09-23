import React from "react";
import LegalHeader from "../components/LegalHeader";
import Footer from "../components/Footer";
import { VineBranch, VineWatermark } from "../components/Shared";
import { Lock, ShieldCheck, Mail, Calendar, UserCheck, EyeOff, KeyRound } from "lucide-react";

const PrivacyPage = () => {
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
              <Lock className="w-3.5 h-3.5 text-sage-300" />
              <span>Privacidade & Proteção de Dados</span>
            </div>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-sage-500 mb-4 tracking-tight">
              Política de Privacidade
            </h1>
            <p className="text-sage-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Transparência total sobre como tratamos, protegemos e respeitamos os seus dados no aplicativo{" "}
              <strong className="text-sage-500 font-semibold">Saber Espírita</strong>.
            </p>
          </div>

          {/* Cartão de Conteúdo Principal */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl shadow-sage-200/40 border border-sage-100 space-y-8 text-sage-400 leading-relaxed text-sm md:text-base">
            
            <div className="p-4 sm:p-5 rounded-2xl bg-sage-50 border border-sage-200/70 flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-sage-300 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-sage-500 leading-relaxed">
                Esta Política de Privacidade descreve como o aplicativo <strong>Saber Espírita</strong> coleta, utiliza e protege as informações dos usuários. Ao utilizar o aplicativo, você concorda com os termos desta política. Se você não concordar, por favor, não continue a usar o aplicativo.
              </p>
            </div>

            <section className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-sage-500 pb-2 border-b border-sage-100 flex items-center gap-2">
                <span className="text-sage-300 text-lg">1.</span> Coleta de Informações
              </h2>
              <p>
                Ao se cadastrar ou fazer login no aplicativo Saber Espírita, coletamos as seguintes informações:
              </p>
              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-sage-50/70 border border-sage-100 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-sage-300 shadow-xs">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-sage-500 text-sm">Apelido / Nome</h3>
                  <p className="text-xs text-sage-400">
                    Usado para sua identificação dentro do aplicativo, placares de estudo e para personalizar sua experiência.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-sage-50/70 border border-sage-100 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-sage-300 shadow-xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-sage-500 text-sm">Endereço de E-mail</h3>
                  <p className="text-xs text-sage-400">
                    Usado para autenticação segura, recuperação de senha e comunicações essenciais sobre sua conta.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-sage-50/70 border border-sage-100 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-sage-300 shadow-xs">
                    <KeyRound className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-sage-500 text-sm">Senha</h3>
                  <p className="text-xs text-sage-400">
                    Armazenada de forma criptografada (hash seguro) para proteger o acesso à sua conta.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-sage-500 pb-2 border-b border-sage-100 flex items-center gap-2">
                <span className="text-sage-300 text-lg">2.</span> Uso das Informações
              </h2>
              <p>
                As informações coletadas são utilizadas exclusivamente para os seguintes propósitos:
              </p>
              <ul className="space-y-3 pl-1 sm:pl-2">
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-sage-300">•</span>
                  <span>
                    <strong className="text-sage-500 font-semibold">Gerenciamento da Conta:</strong> Para permitir que você faça login, acesse seu progresso nos cursos e quizzes, sincronize seus dados e recupere sua senha com segurança.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-sage-300">•</span>
                  <span>
                    <strong className="text-sage-500 font-semibold">Personalização da Experiência:</strong> O apelido ou nome é utilizado para personalizar a interface e, se habilitado, exibido em placares amigáveis de pontuação e fixação.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-sage-300">•</span>
                  <span>
                    <strong className="text-sage-500 font-semibold">Comunicações:</strong> Seu e-mail poderá ser utilizado para enviar avisos de serviço, novidades e links de recuperação de conta.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-sage-300">•</span>
                  <span>
                    <strong className="text-sage-500 font-semibold">Melhoria Contínua do Serviço:</strong> Dados agregados e anônimos (não identificáveis pessoalmente) sobre uso geral podem ser analisados para entender padrões de estudo e aprimorar a estabilidade do app.
                  </span>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-sage-500 pb-2 border-b border-sage-100 flex items-center gap-2">
                <span className="text-sage-300 text-lg">3.</span> Compartilhamento de Informações
              </h2>
              <div className="p-4 rounded-2xl bg-sage-50/50 border border-sage-100">
                <p>
                  O aplicativo Saber Espírita <strong>não vende, não aluga e não compartilha suas informações pessoais</strong> (apelido, e-mail, senha, nome) com terceiros, incluindo empresas, organizações ou indivíduos, exceto estritamente quando exigido por ordem judicial ou disposição legal expressa.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-sage-500 pb-2 border-b border-sage-100 flex items-center gap-2">
                <span className="text-sage-300 text-lg">4.</span> Cookies e Tecnologias Similares
              </h2>
              <p className="flex items-start gap-3">
                <EyeOff className="w-5 h-5 text-sage-300 shrink-0 mt-0.5" />
                <span>
                  O aplicativo Saber Espírita <strong>não utiliza cookies, tags de pixel invasivas ou qualquer tecnologia de rastreamento comportamental de terceiros</strong> para fins de publicidade direcionada.
                </span>
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-sage-500 pb-2 border-b border-sage-100 flex items-center gap-2">
                <span className="text-sage-300 text-lg">5.</span> Segurança dos Dados
              </h2>
              <p>
                A segurança das suas informações é uma prioridade fundamental. Adotamos padrões reconhecidos da indústria para proteger os dados sob nossa custódia, incluindo armazenamento criptografado de credenciais, tráfego sob conexões seguras HTTPS/TLS e infraestrutura confiável de nuvem.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-sage-500 pb-2 border-b border-sage-100 flex items-center gap-2">
                <span className="text-sage-300 text-lg">6.</span> Menores de Idade
              </h2>
              <p>
                O aplicativo Saber Espírita aborda a Doutrina Espírita e é destinado principalmente a <strong>adolescentes (a partir de 13 anos) e adultos</strong>. Caso você seja menor de 18 anos, certifique-se de ter a permissão de seus pais ou responsáveis antes de se cadastrar e fornecer qualquer dado pessoal. Não coletamos intencionalmente dados de menores de 13 anos. Se identificado qualquer registro sem o consentimento devido, procederemos com a exclusão imediata dos dados.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-sage-500 pb-2 border-b border-sage-100 flex items-center gap-2">
                <span className="text-sage-300 text-lg">7.</span> Alterações na Política de Privacidade
              </h2>
              <p>
                Reservamo-nos o direito de atualizar esta Política de Privacidade a qualquer momento para refletir melhorias no serviço ou adequações legais. Mudanças relevantes serão comunicadas através do aplicativo ou de nosso site oficial, com a devida atualização da data de revisão.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-sage-500 pb-2 border-b border-sage-100 flex items-center gap-2">
                <span className="text-sage-300 text-lg">8.</span> Contato e Encarregado de Dados
              </h2>
              <p>
                Se você tiver dúvidas, solicitações de acesso ou exclusão de dados, ou preocupações sobre esta Política de Privacidade, entre em contato através do e-mail oficial:
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

export default PrivacyPage;
