// 1.1
const delay = () => new Promise(
    resolve => setTimeout(resolve, 1000)
);

async function umPorSegundo() {
    await delay(console.log('1s'));
    await delay(console.log('2s'));
    await delay(console.log('3s'));
}

umPorSegundo();

// 1.2
import axios from 'axios';

async function getUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);

        console.log(response.data);
    } catch (err) {
        console.log('Usuário não existe');
    }
}

getUserFromGithub('maurilioz1');
getUserFromGithub('maurilioz1124123');

// 1.3
class Github {
    static async getRepositories(repo) {

        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);

            console.log(response.data);
        } catch (err) {
            console.log('Repositório não existe');
        }
    }
}

Github.getRepositories('Maurilioz1/rocketseat-starter-es6');
Github.getRepositories('Maurilioz1/dslkvmskv');

// 1.4
const buscaUsuario = async user => {

    try {
        const response = await axios.get(`https://api.github.com/users/${user}`)

        console.log(response.data);
    } catch (err) {
        console.log('Usuário não existe');
    };
}

buscaUsuario('maurilioz1');