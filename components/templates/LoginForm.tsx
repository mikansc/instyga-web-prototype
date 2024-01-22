import Link from "next/link";

export const LoginForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Senha
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="d-grid gap-2 mt-4">
        <Link className="btn btn-primary" href="/prototype/dashboard">
          Acessar
        </Link>
      </div>
    </form>
  );
};
