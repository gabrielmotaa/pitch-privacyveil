import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Shield, Target, TrendingUp, DollarSign, Calendar, Award, CodeXml, Zap, CheckCircle } from 'lucide-react';
// import css
import './App.css';
import logo from './assets/logo.svg';

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-12">
          <img src={logo} alt="PrivacyVeil Logo" className="w-40 h-40" />
          <h1 className="text-8xl font-bold text-indigo-600">PrivacyVeil</h1>
          <p className="text-3xl text-gray-700 text-center max-w-4xl">Auditoria automatizada de interfaces de privacidade</p>
        </div>
      )
    },
    {
      title: "O Problema",
      icon: <Target className="w-8 h-8 text-indigo-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-lg">
            <p className="text-2xl font-semibold text-gray-800">Empresas perdem usuários por negligenciar a privacidade na UX</p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-6xl font-bold text-indigo-600 mb-4">2 em 3</p>
              <p className="text-lg text-gray-700 leading-relaxed">usuários se preocupam com dados em compras online¹</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-6xl font-bold text-red-600 mb-4">⚠️</p>
              <p className="text-lg text-gray-700 leading-relaxed">Usuários abandonam apps por medo do uso de dados¹</p>
            </div>
          </div>
          <p className="text-base text-gray-500 mt-6">¹ NIC.br, 2023</p>
        </div>
      )
    },
    {
      title: "Nossa Solução",
      icon: <Shield className="w-8 h-8 text-indigo-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-8 rounded-lg">
            <p className="text-2xl font-semibold text-gray-800">Auditoria de interfaces de privacidade em minutos</p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <CodeXml className="w-14 h-14 text-indigo-600 mb-6" />
              <h3 className="font-bold text-xl mb-3">Crawler Especializado</h3>
              <p className="text-base text-gray-600 leading-relaxed">Análise completa das páginas do seu site</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Zap className="w-14 h-14 text-purple-600 mb-6" />
              <h3 className="font-bold text-xl mb-3">Insights Instantâneos</h3>
              <p className="text-base text-gray-600 leading-relaxed">Análise completa com IA proprietária</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <CheckCircle className="w-14 h-14 text-pink-600 mb-6" />
              <h3 className="font-bold text-xl mb-3">Sugestões Acionáveis</h3>
              <p className="text-base text-gray-600 leading-relaxed">Relatórios práticos baseados em pesquisas</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Oportunidade de Mercado",
      icon: <TrendingUp className="w-8 h-8 text-indigo-600" />,
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-indigo-600 text-white p-10 rounded-xl shadow-xl">
              <p className="text-base uppercase mb-3 tracking-wide">Público Primário</p>
              <p className="text-6xl font-bold mb-4">18.000</p>
              <p className="text-2xl mb-6">Startups no Brasil²</p>
              <div className="mt-6 space-y-2 text-base">
                <p>• TI: 13,7%</p>
                <p>• Saúde: 11,2%</p>
                <p>• Educação: 8,8%</p>
              </div>
            </div>
            <div className="bg-green-600 text-white p-10 rounded-xl shadow-xl">
              <p className="text-base uppercase mb-3 tracking-wide">Público Secundário</p>
              <p className="text-6xl font-bold mb-4">66%</p>
              <p className="text-2xl mb-6">Micro e pequenas empresas</p>
              <p className="mt-6 text-base">Em transformação digital³</p>
            </div>
          </div>
          <div className="text-sm text-gray-500 bg-gray-50 p-5 rounded-lg">
            <p>² Poder360, 2023</p>
            <p>³ Portal FGV, 2023</p>
          </div>
        </div>
      )
    },
    {
      title: "Vantagem Competitiva",
      icon: <Award className="w-8 h-8 text-indigo-600" />,
      content: (
        <div className="space-y-5">
          <table className="w-full text-sm border-collapse bg-white rounded-lg shadow-lg">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="p-4 text-left text-base">Solução</th>
                <th className="p-4 text-left text-base">Foco</th>
                <th className="p-4 text-left text-base">Método</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-indigo-50 border-l-4 border-indigo-600">
                <td className="p-4 font-bold text-base">PrivacyVeil</td>
                <td className="p-4 text-sm">Privacidade + UX</td>
                <td className="p-4 text-sm">LLM + Heurísticas</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 text-sm">OneTrust</td>
                <td className="p-4 text-sm">Conformidade Legal</td>
                <td className="p-4 text-sm">Dashboards</td>
              </tr>
              <tr>
                <td className="p-4 text-sm">Hotjar</td>
                <td className="p-4 text-sm">Comportamento</td>
                <td className="p-4 text-sm">Coleta de dados</td>
              </tr>
            </tbody>
          </table>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-base font-bold text-blue-900 mb-3">Nossa Diferenciação</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white p-3 rounded shadow">
                <p className="font-semibold text-blue-600 mb-1 text-sm">✓ Foco em UX</p>
                <p className="text-xs text-gray-600">Privacidade utilizável, não apenas compliance</p>
              </div>
              <div className="bg-white p-3 rounded shadow">
                <p className="font-semibold text-blue-600 mb-1 text-sm">✓ Automatização</p>
                <p className="text-xs text-gray-600">Detecção e correção automática de problemas</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Modelo de Negócio",
      icon: <DollarSign className="w-8 h-8 text-indigo-600" />,
      content: (
        <div className="space-y-5">
          <div className="bg-indigo-600 text-white p-5 rounded-xl shadow-xl">
            <h3 className="text-xl font-bold">SaaS Freemium</h3>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="space-y-2.5">
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
                <p className="font-semibold text-base mb-1">Freemium</p>
                <p className="text-sm text-gray-600">1 análise gratuita/mês</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                <p className="font-semibold text-base mb-1">Básico</p>
                <p className="text-sm text-gray-600">1 site, relatórios básicos</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500">
                <p className="font-semibold text-base mb-1">Avançado</p>
                <p className="text-sm text-gray-600">Múltiplos sites</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-orange-500">
                <p className="font-semibold text-base mb-1">Enterprise</p>
                <p className="text-sm text-gray-600">API e integrações</p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md text-base space-y-2">
              <p className="font-bold mb-2 text-base">Métricas AARRR</p>
              <p className="text-sm"><strong>Aquisição:</strong> Marketing + SEO</p>
              <p className="text-sm"><strong>Ativação:</strong> 1ª análise grátis</p>
              <p className="text-sm"><strong>Receita:</strong> Conversão para pago</p>
              <p className="text-sm"><strong>Retenção:</strong> Valor contínuo</p>
              <p className="text-sm"><strong>Referral:</strong> Comunidades</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Roadmap - 12 Meses",
      icon: <Calendar className="w-8 h-8 text-indigo-600" />,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-blue-100 p-6 rounded-xl border-l-4 border-blue-600">
              <p className="font-bold text-blue-900 mb-3 text-lg">Fase 1</p>
              <p className="text-base font-semibold mb-4">Meses 1-3</p>
              <ul className="text-sm space-y-2">
                <li>• Web crawler</li>
                <li>• Modelo LLM</li>
                <li>• Plataforma online</li>
                <li>• Infraestrutura cloud</li>
              </ul>
            </div>
            <div className="bg-green-100 p-6 rounded-xl border-l-4 border-green-600">
              <p className="font-bold text-green-900 mb-3 text-lg">Fase 2</p>
              <p className="text-base font-semibold mb-4">Meses 4-6</p>
              <ul className="text-sm space-y-2">
                <li>• Teste com Early adopters</li>
                <li>• Coleta de Feedback</li>
                <li>• Conteúdo de Marketing</li>
              </ul>
            </div>
            <div className="bg-yellow-100 p-6 rounded-xl border-l-4 border-yellow-600">
              <p className="font-bold text-yellow-900 mb-3 text-lg">Fase 3</p>
              <p className="text-base font-semibold mb-4">Meses 7-9</p>
              <ul className="text-sm space-y-2">
                <li>• Beta aberto</li>
                <li>• Marketing intensivo</li>
                <li>• Integração pagamentos</li>
              </ul>
            </div>
            <div className="bg-purple-100 p-6 rounded-xl border-l-4 border-purple-600">
              <p className="font-bold text-purple-900 mb-3 text-lg">Fase 4</p>
              <p className="text-base font-semibold mb-4">Meses 10-12</p>
              <ul className="text-sm space-y-2">
                <li>• Lançamento v1.0</li>
                <li>• Escalonamento</li>
              </ul>
            </div>
          </div>
          <div className="bg-indigo-600 text-white p-10 rounded-xl shadow-xl">
            <h3 className="text-3xl font-bold mb-6 text-center">Investimento: R$ 300.000</h3>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div><p className="text-4xl font-bold">R$ 300k</p><p className="text-base mt-2">Total</p></div>
              <div><p className="text-4xl font-bold">12 meses</p><p className="text-base mt-2">Runway</p></div>
              <div><p className="text-4xl font-bold">v1.0</p><p className="text-base mt-2">Entrega</p></div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Uso do Investimento",
      icon: <DollarSign className="w-8 h-8 text-indigo-600" />,
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-blue-50 p-5 rounded-lg">
                <div className="flex justify-between mb-3">
                  <span className="font-semibold text-base">Desenvolvedores</span>
                  <span className="font-bold text-indigo-600 text-lg">R$ 180k</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-indigo-600 h-3 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>
              <div className="bg-purple-50 p-5 rounded-lg">
                <div className="flex justify-between mb-3">
                  <span className="font-semibold text-base">Cloud</span>
                  <span className="font-bold text-purple-600 text-lg">R$ 30k</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-purple-600 h-3 rounded-full" style={{width: '10%'}}></div>
                </div>
              </div>
              <div className="bg-green-50 p-5 rounded-lg">
                <div className="flex justify-between mb-3">
                  <span className="font-semibold text-base">API IA</span>
                  <span className="font-bold text-green-600 text-lg">R$ 30k</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-green-600 h-3 rounded-full" style={{width: '10%'}}></div>
                </div>

              </div>
              <div className="bg-orange-50 p-5 rounded-lg">
                <div className="flex justify-between mb-3">
                  <span className="font-semibold text-base">Marketing</span>
                  <span className="font-bold text-orange-600 text-lg">R$ 18k</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-orange-600 h-3 rounded-full" style={{width: '6%'}}></div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
                <div className="flex justify-between text-base border-b pb-3">
                  <span>Material Permanente</span>
                  <span className="font-semibold">R$ 17.200</span>
                </div>
                <div className="flex justify-between text-base border-b pb-3">
                  <span>Licenças Software</span>
                  <span className="font-semibold">R$ 12.000</span>
                </div>
                <div className="flex justify-between text-base border-b pb-3">
                  <span>Jurídico/Contábil</span>
                  <span className="font-semibold">R$ 4.800</span>
                </div>
                <div className="flex justify-between text-base border-b pb-3">
                  <span>Contingência</span>
                  <span className="font-semibold">R$ 8.000</span>
                </div>
                <div className="flex justify-between pt-4 border-t-2 border-indigo-600">
                  <span className="font-bold text-xl">Total</span>
                  <span className="font-bold text-2xl text-indigo-600">R$ 300.000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <img src={logo} alt="PrivacyVeil Logo" className="w-16 h-16" />
          <h2 className="text-4xl font-bold text-center text-indigo-600 max-w-4xl leading-tight">Transforme privacidade em vantagem competitiva</h2>
          <div className="grid grid-cols-3 gap-5 w-full max-w-4xl">
            <div className="bg-white p-5 rounded-xl shadow-lg text-center">
              <p className="text-3xl font-bold text-indigo-600 mb-2">18.000</p>
              <p className="text-sm text-gray-700">Startups no mercado</p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-lg text-center">
              <p className="text-3xl font-bold text-green-600 mb-2">66%</p>
              <p className="text-sm text-gray-700">Empresas em transformação digital</p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-lg text-center">
              <p className="text-3xl font-bold text-purple-600 mb-2">2/3</p>
              <p className="text-sm text-gray-700">Usuários preocupados com privacidade</p>
            </div>
          </div>
          <div className="bg-indigo-600 text-white p-6 rounded-2xl shadow-2xl">
            <p className="text-2xl font-bold text-center">R$ 300.000</p>
            <p className="text-center text-base mt-2">12 meses · v1.0</p>
          </div>
          <a href="https://privacyveil.com.br" className="text-indigo-600 font-medium text-base">privacyveil.com.br</a>
        </div>
      )
    },
    {
      title: "Referências",
      icon: <Shield className="w-8 h-8 text-indigo-600" />,
      content: (
        <div className="space-y-5">
          <div className="bg-gray-50 p-4 rounded border-l-4 border-blue-500">
              <p className="font-semibold mb-2">[1] Pesquisa NIC.br sobre Privacidade de Dados</p>
              <p className="text-gray-700 mb-2">
                "Dois em cada três usuários de internet brasileiros se preocupam com o uso de seus dados pessoais em compras online"
              </p>
              <p className="text-xs text-gray-600">
                CGI.br, 24 out. 2023. Disponível em: <a href="https://cgi.br/noticia/releases/dois-em-cada-tres-usuarios-de-internet-brasileiros-se-preocupam-com-o-uso-de-seus-dados-pessoais-em-compras-online-revela-pesquisa-inedita-do-nic-br/">https://cgi.br/noticia/releases/dois-em-cada-tres-usuarios-de-internet-brasileiros-se-preocupam-com-o-uso-de-seus-dados-pessoais-em-compras-online-revela-pesquisa-inedita-do-nic-br/</a>
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded border-l-4 border-green-500">
              <p className="font-semibold mb-2">[2] Startups no Brasil</p>
              <p className="text-gray-700 mb-2">
                "Brasil tem 18.000 startups em operação; SP lidera com 1.900 empresas"
              </p>
              <p className="text-xs text-gray-600">
                Poder360, 14 out. 2023. Disponível em: <a href="https://www.poder360.com.br/poder-empreendedor/brasil-tem-18-000-startups-em-operacao-sp-lidera-com-1-900-empresas/">https://www.poder360.com.br/poder-empreendedor/brasil-tem-18-000-startups-em-operacao-sp-lidera-com-1-900-empresas/</a>
              </p>
            </div>

          <div className="bg-gray-50 p-4 rounded border-l-4 border-purple-500">
              <p className="font-semibold mb-2">[3] Maturidade Digital de Micro e Pequenas Empresas</p>
              <p className="text-gray-700 mb-2">
                "Estudo revela que 66% das micro e pequenas empresas estão em níveis iniciais de maturidade digital"
              </p>
              <p className="text-xs text-gray-600">
                Portal FGV, 16 out. 2023. Disponível em: <a href="https://portal.fgv.br/noticias/estudo-revela-66-micro-e-pequenas-empresas-estao-niveis-iniciais-maturidade-digital">https://portal.fgv.br/noticias/estudo-revela-66-micro-e-pequenas-empresas-estao-niveis-iniciais-maturidade-digital</a>
              </p>
            </div>
        </div>
      )
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const currentSlideData = slides[currentSlide];

  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50 flex flex-col">
      <div className="bg-white shadow-md px-8 py-5 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="PrivacyVeil Logo" className="w-10 h-10" />
          <span className="text-2xl font-bold text-indigo-600">PrivacyVeil</span>
        </div>
        <div className="text-base font-medium text-gray-600 bg-indigo-50 px-5 py-2 rounded-full">
          Slide {currentSlide + 1} de {slides.length}
        </div>
      </div>

      <div className="flex-1 p-8 overflow-auto">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-10 h-full">
          {currentSlideData.title && (
            <div className="flex items-center space-x-4 mb-6 pb-5 border-b-2 border-indigo-200">
              {currentSlideData.icon}
              <h2 className="text-4xl font-bold text-gray-800">{currentSlideData.title}</h2>
            </div>
          )}
          <div className="mt-4">{currentSlideData.content}</div>
        </div>
      </div>

      <div className="bg-white shadow-lg px-8 py-5 flex items-center justify-between">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="flex items-center space-x-2 px-7 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition text-base font-medium"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Anterior</span>
        </button>

        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all rounded-full ${
                index === currentSlide ? 'w-8 h-3 bg-indigo-600' : 'w-3 h-3 bg-gray-300'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="flex items-center space-x-2 px-7 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition text-base font-medium"
        >
          <span>Próximo</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default PitchDeck;
