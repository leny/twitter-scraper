/* leny/twitter-scraper
 *
 * /src/index.js - Main entry point
 *
 * coded by leny
 * started at 09/01/2019
 */

import axios from "axios";
import {JSDOM, VirtualConsole} from "jsdom";
import fromEntries from "lodash.frompairs";

export default async username => {
    const {data: content} = await axios.get(`https://twitter.com/${username}`);

    const {
        window: {document},
    } = new JSDOM(content, {virtualConsole: new VirtualConsole()});

    return fromEntries(
        ["tweets", "following", "followers", "favorites"].map(key => {
            const value = document
                .querySelector(
                    `a.ProfileNav-stat[data-nav="${key}"] span.ProfileNav-value`,
                )
                .getAttribute("data-count");

            return [key, isNaN(+value) ? null : +value];
        }),
    );
};
