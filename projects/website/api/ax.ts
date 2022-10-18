import { Express, Request, Response } from 'express';

export function registerAxHandlers(server: Express, email: any) {
  server.post(
    '/ax/promotion/ebook/angular-enterprise-architecture',
    handleEbookAngularEnterpriseArchitectureFactory(email)
  );
}

function handleEbookAngularEnterpriseArchitectureFactory(email) {
  return function handleEbookAngularEnterpriseArchitecture(
    req: Request,
    res: Response
  ) {
    const msg = {
      to: req.body.email,
      from: 'tomas@angularexperts.io',
      templateId: 'd-101babd5fdf34527956b232c11bbd248',
      dynamic_template_data: {
        name: 'Tomas Trajan',
        username: 'tomastrajan',
        title: 'Angular Enterprise Architecture by Tomas Trajan',
        link: 'https://angularexperts.io/products/ebook-angular-enterprise-architecture?purchase=success',
      },
    };
    email
      .send(msg)
      .then(() => res.status(200).json('success'))
      .catch((error) => res.send(error));
  };
}
