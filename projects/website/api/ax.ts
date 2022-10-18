import { Express, Request, Response } from 'express';

export function registerAxHandlers(server: Express, email: any) {
  server.post(
    '/ax/promotion/ebook/angular-enterprise-architecture',
    handleEbookAngularEnterpriseArchitectureFactory(email)
  );
  server.post('/ax/get-in-touch', handleGetInTouchFactory(email));
  server.post('/ax/get-in-touch-mini', handleGetInTouchMiniFactory(email));
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

function handleGetInTouchFactory(email) {
  return function handleGetInTouch(req: Request, res: Response) {
    const msg = {
      to: 'get-in-touch@angularexperts.io',
      from: req.body.email,
      subject: `${req.body.domain} - Get in touch form`,
      text: `
      From: ${req.body.firstname} ${req.body.lastname}
      Email: ${req.body.email}
      Company: ${req.body.company}
      Referer: ${req.body.referer}
      Service: ${req.body.service}
      Message: ${req.body.message}
    `,
    };
    email
      .send(msg)
      .then(() => res.status(200).json('success'))
      .catch((error) => res.send(error));
  };
}

function handleGetInTouchMiniFactory(email) {
  return function handleGetInTouch(req: Request, res: Response) {
    const msg = {
      to: 'get-in-touch@angularexperts.io',
      from: req.body.email,
      subject: `${req.body.domain} - Get in touch MINI`,
      text: `
      Get in touch MINI
      Email: ${req.body.email}
    `,
    };
    email
      .send(msg)
      .then(() => res.status(200).json('success'))
      .catch((error) => res.send(error));
  };
}
