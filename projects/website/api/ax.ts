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
      templateId: 'd-bd48162f17fd4584bb7c9ed9a51464c4',
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
