

import { SliderGroupComponent } from "./slider-group-component";
import { OlaClient } from "ola-client";

export default async function Page() {

  const client = new OlaClient();
  const result = await client.getDmx('1');
  const data = result.dmx.join(',');

  return (
    <div className="flex justify-center items-center h-screen space-x-1">
      <SliderGroupComponent initialData={data} />
    </div>
  );
}