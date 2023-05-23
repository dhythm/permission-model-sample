import { type NextPage } from "next";
import Head from "next/head";

import { api } from "@/utils/api";
import { Action, Domain } from "@prisma/client";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
} from "@mui/material";

const Home: NextPage = () => {
  const abilities = api.permission.getAbilities.useQuery();

  return (
    <>
      <Head>
        <title>Permission Model Sample</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="name">Name</InputLabel>
            <OutlinedInput id="name" label="Name" />
          </FormControl>
          {Object.keys(Domain).map((domain) => {
            return (
              <div key={domain}>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <FormLabel id="demo-radio-buttons-group-label">
                    {domain}
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    row
                  >
                    {Object.keys(Action).map((action) => (
                      <FormControlLabel
                        key={`${domain}-${action}`}
                        value={action}
                        control={<Radio />}
                        label={action}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </div>
            );
          })}
        </Box>
      </main>
    </>
  );
};

export default Home;
