
interface IapiNoticesResponse{
  status: string,
  totalHits: number,
  data: Article[]
}
interface Article {
  id: string;
  authors: string[];
  contributors: string[];
  description: string;
  identifiers: string[];
  publisher: string;
  relations: any[]; 
  repositories: string[];
  repositoryDocument: {
    [key: string]: any; 
  };
  subjects: string[];
  title: string;
  topics: string[];
  types: any[]; 
  year: number;
  fulltextIdentifier: string;
  oai: string;
  downloadUrl: string;
}

async function buscaClima() {
  const apiKey: string = '519470a7867522f9b463c4e5b01fd0b3';
  const cidade: string = 'Itabuna';

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade},BR&appid=${apiKey}`);

    if (!response.ok) {
      throw new Error('Erro na requisição');
    }

    const data = await response.json();

    if (data && data.main && data.main.temp !== undefined) {
      const temperature: number = data.main.temp;
      const tempMin: number = data.main.temp_min;
      const tempMax: number = data.main.temp_max;
      const clima: string = data.weather[0].description;

      mostrarTemperatura(temperature, tempMin, tempMax, clima)
    } else {
      throw new Error('Dados de temperatura não disponíveis');
    }

  } catch (error) {
    console.error('Erro:', error);
  }
}

function mostrarTemperatura(temperatura: number, tempMin: number, tempMax: number, clima: string) {
  const divWeatherInfo = document.getElementById('clima_info');

  const temperaturaElement = document.createElement('p');
  temperaturaElement.textContent = `Temperatura: ${temperatura}°C`;

  const temperaturaMin = document.createElement('p');
  temperaturaMin.textContent = `Mínima: ${tempMin}°C`;

  const temperaturaMax = document.createElement('p');
  temperaturaMax.textContent = `Máxima: ${tempMax}°C`;

  const temperaturaClima = document.createElement('p');
  temperaturaClima.textContent = `Clima: ${clima}`;

  if (divWeatherInfo) {
    divWeatherInfo.appendChild(temperaturaElement);
    divWeatherInfo.appendChild(temperaturaMin);
    divWeatherInfo.appendChild(temperaturaMax);
    divWeatherInfo.appendChild(temperaturaClima);
  } else {
    console.error('Div não encontrada.');
  }
}



async function buscaNoticias(): Promise<Article[]> {
  const apiKey: string = '9Xzyk6QRlWpuKdarLe0ZUgPSbq2cn48o'; // Substitua com sua chave de API do Core API
  const searchTerm: string = 'machine learning'; // Termo de busca para as notícias acadêmicas
  try {
    const response = await fetch(`https://core.ac.uk/api-v2/articles/search/${searchTerm}?apiKey=${apiKey}`);

    if (!response.ok) {
      throw new Error('Erro na requisição');
    }

    const data = await response.json() as IapiNoticesResponse;
    for(let i = 0; i < 5; i++){
      console.log(data.data[i].title, data.data[i].description,data.data[i].downloadUrl)
      mostrarNoticias(data.data[i].title, data.data[i].description,data.data[i].downloadUrl);
      // mostrarNoticias("data.data[i].title", "data.data[i].description","data.data[i].downloadUrl");
    }
    return data.data;
  } catch (error) {
    console.error('Erro:', error);
    return [];
  }
}

function mostrarNoticias(title:string,description: string, link: string) {
  const divNoticias = document.getElementById('noticias_content');

  const noticiaTitulo = document.createElement('h3');
  const noticiaDescricao = document.createElement('p');

  noticiaTitulo.textContent = ` ${title}`;
  noticiaDescricao.textContent = `${description}`

 
  if (divNoticias) {
    divNoticias.appendChild(noticiaTitulo);
    divNoticias.appendChild(noticiaDescricao);

  } else {
    console.error('Div não encontrada.');
  }
}

buscaNoticias();
buscaClima();
