// Copyright ©,2023, Birmingham City University

import axios from 'axios'

const loginJeplus = async (email, password) => {
  const config = {
    url: 'https://api.ensims.com/users/api/auth',
    method: 'POST',
    data: {
      email,
      password,
    },
  }

  return await axios(config)
    .then((res) => {
      if (res.data) {
        return { data: res.data, token: res.headers['set-cookie'][0] }
      }
    })
    .catch((e) => console.log(e))
}

export { loginJeplus }
