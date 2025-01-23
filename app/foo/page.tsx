import { ClientComponent } from "./client-component";


export default async function Page() {


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <ClientComponent />
    </div>
  );
}