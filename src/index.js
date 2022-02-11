'use strict';

const axios = require('axios');
const { forEach } = require('lodash');
const language = require('./api/language/controllers/language');

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) { },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    axios
      .get('https://ddragon.leagueoflegends.com/cdn/languages.json')
      .then(res => {
        console.log(res.data)
        const language = res.data

        language.forEach((lang) => {
          console.log(`name: ${lang}`)
          strapi.service('api::language.language').create({
            data: {
              name: lang
            },
          });
        });
      })
      .catch(error => {
        console.error(error)
      });

    axios
      .get('https://ddragon.leagueoflegends.com/api/versions.json')
      .then(res => {
        console.log(res.data)
        const versions = res.data

        versions.forEach((version) => {
          console.log(`name: ${version}`)
          strapi.service('api::version.version').create({
            data: {
              name: version
            },
          });
        });
      })
      .catch(error => {
        console.error(error)
      });
  },
};
