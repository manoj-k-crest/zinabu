import scanner from 'sonarqube-scanner';

scanner(
  {
    serverUrl: 'http://staging.qservicesit.net:9000',
    token: 'sqa_0f902c5f18e0cd49eb43dc6c9f8c9318d7581d38',

    options: {
      'sonar.projectName': 'MarketPlace',
      'sonar.projectKey':
        'Marketplace_Marketplace_aa794b2a-16ef-417b-8fb7-5b5e4f1d9785',
      'sonar.sources': 'src', // Point to the src directory
    },
  },
  () => {},
);
