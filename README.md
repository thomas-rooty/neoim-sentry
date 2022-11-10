![](https://cneos.jpl.nasa.gov/images/cneos_banner.png)

## NEOIM Sentry

📡 Near Earth Object Impact Monitoring provides datas gathered from the below systems accessible via NASA's open API about NEOs that has potential future Earth impact events based on currently available observations.

## Introduction

Scout provides trajectory analysis and hazard assessment for recently detected objects on the Minor Planet Center’s
Near-Earth Object Confirmation Page (NEOCP). Objects on these pages are unconfirmed; their designations are
user-assigned and unofficial. These objects could be real asteroids, but they cannot be officially designated until they
are confirmed by additional observations.

In fact, it is very possible that some of these “objects” are not real, but
rather observing artifacts. If the Minor Planet Center receives enough confirming observations to make sure that an
object is a real asteroid, the object is given an official designation and disappears from the NEOCP and Scout. Objects
that remain unconfirmed are eventually removed from the NEOCP and also disappear from Scout.

## CNEOS Scout system

Scout continually monitors the objects on the NEOCP, and for each provides the following orbital, ephemeris, and hazard
assessment information.

- The number of observations and the length of the observed arc
- The RMS of the weighted residuals for the best fitting orbit
- Coarse indicators of absolute magnitude H, MOID, close approach distance, velocity relative to Earth (when defined)
- Note that these quantities can be extremely uncertain for short arcs
- Current ephemeris information updated every 15 minutes: Coarse RA, DEC, V-band magnitude, solar elongation, plane-of-sky (POS) rate of motion, 1-sigma POS uncertainty, and POS uncertainty tomorrow
- Likelihood scores between 0 and 100 for PHA, NEO, geocentric, cometary (Tisserand parameter TJ < 3), and
- Interior-to-Earth orbits
- A rating to categorize the chances of an impact on Earth (not defined for arcs shorter than 20 minutes or with less than three observations):
0. Negligible
1. Small
2. Modest
3. Moderate
4. Elevated

Because of the generally short observation arcs and the uncertain quality of the astrometry, the reported impact ratings
and scores are meant to identify interesting objects rather than provide a rigorous probability assessment.

[Link to CNEOS Scout System documentation](https://cneos.jpl.nasa.gov/scout/intro.html)

## Sentry
Sentry is a highly automated collision monitoring system that continually scans the most current asteroid catalog for possibilities of future impact with Earth over the next 100 years. Whenever a potential impact is detected it will be analyzed and the results immediately published here, except in unusual cases where we seek independent confirmation.

## Sentry System API
This API provides access to results from the CNEOS Sentry system.

[Link to Sentry API documentation](https://ssd-api.jpl.nasa.gov/doc/sentry.html)

## Scout Data API
This API provides access to near-realtime results from the CNEOS Scout system. Various query modes provide access to available subsets of data. See the examples and query parameters below for details.

[Link to Scout Data API documentation](https://ssd-api.jpl.nasa.gov/doc/scout.html)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed
on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited
in `pages/api/info.tsx`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated
as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
