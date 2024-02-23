import { Button } from "../components/Button/Button";


export function NotFound() {


  return (
    <section className="not__found">
        <div className="not__found-image">
            <img src="" alt="" className="not__found-image-1"/>
        </div>
    <h1 className="not__found-heading">404</h1>
    <h3 className="not__found-heading-secondary">UH OH! You're lost!</h3>
    <p className="not__found-paragraph">The page you are looking for is not found! Click the button to go to home page</p>
    <Button caption={'HOME'} hrefLink={'/pl.petkova'} />

    </section>
  );
}
