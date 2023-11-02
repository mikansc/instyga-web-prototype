export default function RegisterPage() {
  return (
    <div className="mt-4 mb-5">
      <div className="row mt-5 pt-5">
        <div className="col-8 offset-2 border p-5 d-flex flex-column">
          <h2 className="d-block mt-2 mb-4">Novo usuário</h2>
          <div className="mt-4">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-control"
              id="email"
              type="email"
              name=""
              required
            />
          </div>
          <div className="row">
            <div className="mt-4 col-6">
              <label className="form-label" htmlFor="password">
                Senha
              </label>
              <input
                className="form-control"
                id="password"
                type="password"
                name=""
                required
              />
            </div>
            <div className="mt-4 col-6">
              <label className="form-label" htmlFor="confirm-password">
                Confirmar senha
              </label>
              <input
                className="form-control"
                id="confirm-password"
                type="confirm-password"
                name=""
                required
              />
            </div>
          </div>
        </div>

        <div className="row text-bg-dark py-5">
          <div className="col-4 offset-2">
            <div className="container action-block">
              <span className="display-5 mb-2 d-block">Free</span>
              <ul className="list-group list-group-light">
                <li className="list-group-item">
                  <input
                    disabled
                    className="form-check-input me-1"
                    type="checkbox"
                    checked
                    value=""
                    aria-label="..."
                  />
                  Teste seu conhecimento em Tech e Data
                </li>
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    checked
                    disabled
                    value=""
                    aria-label="..."
                  />
                  Avaliações multipla escolha
                </li>
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    checked
                    disabled
                    value=""
                    aria-label="..."
                  />
                  Processos seletivos
                </li>
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    disabled
                    value=""
                    aria-label="..."
                  />
                  3 Avaliações profissionais em simulador por mês
                </li>
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    disabled
                    value=""
                    aria-label="..."
                  />
                  Certificados compartilhaveis reconhecidos pelo mercado
                </li>
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    disabled
                    value=""
                    aria-label="..."
                  />
                  Eventos e conteúdos restritos para membros Premium
                </li>
              </ul>
              <div className="form-check mt-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Registrar Freemium
                </label>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="container action-block">
              <span className="display-5 mb-2 d-block">
                Premium - R$ 30,00{" "}
              </span>
              <ul className="list-group list-group-light">
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    checked
                    disabled
                    value=""
                    aria-label="..."
                  />
                  Teste seu conhecimento em Tech e Data
                </li>
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    checked
                    disabled
                    value=""
                    aria-label="..."
                  />
                  Avaliações multipla escolha
                </li>
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    checked
                    disabled
                    value=""
                    aria-label="..."
                  />
                  Processos seletivos
                </li>
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    checked
                    disabled
                    value=""
                    aria-label="..."
                  />
                  3 Avaliações profissionais em simulador por mês
                </li>
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    checked
                    disabled
                    value=""
                    aria-label="..."
                  />
                  Certificados compartilhaveis reconhecidos pelo mercado
                </li>
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    checked
                    disabled
                    value=""
                    aria-label="..."
                  />
                  Eventos e conteúdos restritos para membros Premium
                </li>
              </ul>
              <div className="form-check mt-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Registrar Premium
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-8 offset-2 border p-5 d-flex flex-column">
        <div className="mt-4 w-100">
          <a className="btn btn-primary" href="b2c-empty-premium.html">
            Finalizar cadastro
          </a>
          <a className="btn btn-warning" href="index.html">
            Voltar
          </a>
        </div>
      </div>
    </div>
  );
}
