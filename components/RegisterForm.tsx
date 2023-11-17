export const RegisterForm = () => {
  return (
    <>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Digite seu email
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Confirme seu email
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
          Digite uma senha
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Confirme sua senha
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <div className="d-grid gap-2 mt-4">
        <button type="submit" className="btn btn-primary">
          Criar conta
        </button>
      </div>
    </>
  );
};
