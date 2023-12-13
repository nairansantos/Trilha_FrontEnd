var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function buscaClima() {
    return __awaiter(this, void 0, void 0, function () {
        var apiKey, cidade, response, data, temperature, tempMin, tempMax, clima, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiKey = '519470a7867522f9b463c4e5b01fd0b3';
                    cidade = 'Itabuna';
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(cidade, ",BR&appid=").concat(apiKey))];
                case 2:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Erro na requisição');
                    }
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    if (data && data.main && data.main.temp !== undefined) {
                        temperature = data.main.temp;
                        tempMin = data.main.temp_min;
                        tempMax = data.main.temp_max;
                        clima = data.weather[0].description;
                        mostrarTemperatura(temperature, tempMin, tempMax, clima);
                    }
                    else {
                        throw new Error('Dados de temperatura não disponíveis');
                    }
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error('Erro:', error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function mostrarTemperatura(temperatura, tempMin, tempMax, clima) {
    var divWeatherInfo = document.getElementById('clima_info');
    var temperaturaElement = document.createElement('p');
    temperaturaElement.textContent = "Temperatura: ".concat(temperatura, "\u00B0C");
    var temperaturaMin = document.createElement('p');
    temperaturaMin.textContent = "M\u00EDnima: ".concat(tempMin, "\u00B0C");
    var temperaturaMax = document.createElement('p');
    temperaturaMax.textContent = "M\u00E1xima: ".concat(tempMax, "\u00B0C");
    var temperaturaClima = document.createElement('p');
    temperaturaClima.textContent = "Clima: ".concat(clima);
    if (divWeatherInfo) {
        divWeatherInfo.appendChild(temperaturaElement);
        divWeatherInfo.appendChild(temperaturaMin);
        divWeatherInfo.appendChild(temperaturaMax);
        divWeatherInfo.appendChild(temperaturaClima);
    }
    else {
        console.error('Div não encontrada.');
    }
}
function buscaNoticias() {
    return __awaiter(this, void 0, void 0, function () {
        var apiKey, searchTerm, response, data, i, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiKey = '9Xzyk6QRlWpuKdarLe0ZUgPSbq2cn48o';
                    searchTerm = 'machine learning';
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("https://core.ac.uk/api-v2/articles/search/".concat(searchTerm, "?apiKey=").concat(apiKey))];
                case 2:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Erro na requisição');
                    }
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    for (i = 0; i < 5; i++) {
                        console.log(data.data[i].title, data.data[i].description, data.data[i].downloadUrl);
                        mostrarNoticias(data.data[i].title, data.data[i].description, data.data[i].downloadUrl);
                        // mostrarNoticias("data.data[i].title", "data.data[i].description","data.data[i].downloadUrl");
                    }
                    return [2 /*return*/, data.data];
                case 4:
                    error_2 = _a.sent();
                    console.error('Erro:', error_2);
                    return [2 /*return*/, []];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function mostrarNoticias(title, description, link) {
    var divNoticias = document.getElementById('noticias_content');
    var noticiaTitulo = document.createElement('h3');
    var noticiaDescricao = document.createElement('p');
    noticiaTitulo.textContent = " ".concat(title);
    noticiaDescricao.textContent = "".concat(description);
    if (divNoticias) {
        divNoticias.appendChild(noticiaTitulo);
        divNoticias.appendChild(noticiaDescricao);
    }
    else {
        console.error('Div não encontrada.');
    }
}
buscaNoticias();
buscaClima();
