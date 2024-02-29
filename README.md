## 💼 The project

#### 📝 Description :

S.E.N.T.I.N.E.L is a modernized James Bond-inspired role-playing game set in a world of contemporary espionage. Players take on the role of secret agents, navigating a world of intrigue, danger, and high-stakes missions.

#### 🤔 How it's work ? : 

Players immerse themselves in the world of espionage, receiving missions through an interactive platform. These missions are inspired by real-world events but twisted with the explanation that a rival agency is behind them. Players can build and customize their characters, collaborate with other agents, and strategize to complete missions successfully.

#### 💡 Features :

- Engage in high-octane action reminiscent of "Mission Impossible" and "Agents of SHIELD."
- Customize and develop your own secret agent character.
- Receive missions based on real-world events, with a twist of espionage.
- Collaborate with other players and strategize to achieve mission objectives.
- Explore a dynamic world filled with intrigue, betrayal, and covert operations.

#### 👩🏾‍💻 Built With :

This project was carried out with the use of the following languages :

![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)
![Tailwind Css](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Node.JS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=whi)
![Express.JS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

for the database:

![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)

## 📺 Getting Started

#### 🗄️ Structure

    .
    ├── public/                           # Main directory for static assets and HTML file
    ├── src/                              # Main source code directory
    │   ├── assets/                       # Directory for static assets
    │   │   ├── img/                      # Directory for image files
    │   │       ├── logo-sentinelle       # Logo image file
    │   │       └── favocon.ico           # favicon image file
    │   │       ...                       # other images
    │   │   └── style/                    # Directory for styles files
    │   │       └── style.css             # Logo image file
    │   ├── components/                   # Directory for reusable components
    │   │   └── Button.vue                # Component for buttons
    │   │   ...                           # Other components
    │   ├── lib/                          # Directory for lib
    │   │   └── supabaseClient            # Supabase config
    │   ├── store/                        # Vuex Store
    │   │   └── index.js                  # store
    │   ├── views/                        # Directory for views (organizing components for each screen)
    │   │   ├── Home.vue                  # View for the home screen
    │   │   ├── Login.vue                 # View for the login screen
    │   │   └── MissionSearch.vue         # View for the Mission search screen
    │   │   └── ...                       # other views 
    │   ├── App.vue                       # Root component of the application
    │   └── main.js                       # Main entry point of the application
    │   └── router.js                     # Routes config file
    ├── .env.example                      # Environment configuration file example ( to duplicate)
    ├── index.html                        # Main HTML file
    ├── server.js                         # server config
    ├── tailwind.config.js                # Tailwind config file
    └── ...                               # Other project files and directories



## 📺 Getting Started

#### 🔐 Prerequisites:

- [ ] Npm

- [ ] supabase account and database

- [ ] Node js (latest)

- [ ] Word News Api Account (https://worldnewsapi.com/)

- [ ] GTP Key

#### 🔐 env Keys:

 ```sh
  VITE_DDB_URL=https...
  VITE_DDB_KEY= ...
  VITE_NEWS_KEY= ...
  VITE_GPT_KEY= ...
  ```

#### 💾 Installation :

- [ ] Clone the repo :

  ```sh
  git clone git@github.com:JDR-iim/Jeux-de-role.git
  ```

- [ ] Install the dependancies

   ```sh
   npm install
   ```

- [ ] Duplicate the .env.example and rename it to .env
      
- [ ] Add your supabase credentials in env file
      
- [ ] Add your news API Key
      
- [ ] Add your GPT Key

- [ ] run the project

  ```sh
   npm run dev
  ```

#### Compiles and minifies for production

```
npm run build
```

#### Run the node server

```
npm start
```

#### 🤝 Contributing :

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

- Fork the Project
- Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
- Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
- Push to the Branch (`git push origin feature/AmazingFeature`)
- Open a Pull Request

## 🏆 Credits :

- BAZANA NTOMO Fideline `https://github.com/fifi-dev`
- MARTINET Alexis `https://github.com/Wintxer`
- MOPIN Nicolas `https://github.com/Nvcq`
- SAINT-MARTIN Julie `https://github.com/jstm17`
- OUEDRAOGO Coralie `https://github.com/coralieO`


## 📜 Licence
 <a align="center"  rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Licence Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a>
