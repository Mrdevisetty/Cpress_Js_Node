describe('test name', () => {

  before(function () {
    cy.visit('https://google.com')
    
  })

  
  // it('Sample Test', () => {
  //   cy.visit('https://example.cypress.io')
  //   cy.screenshot({
  //     capture: 'runner',
  //     scale: true,
  //   });
  // })

  it('Test goog title',()=>{ 


    cy.title().should('eq','Google')
    cy.get("button[id='W0wltc']").first().click();
    cy.screenshot('./sample/image1',{
      capture: 'runner',
      scale: true,
      overwrite: true,
    })

    cy.fixture('data.json').then((data) => {
      // "this" is still the test context object
     const name = data.name

    cy.get("textarea[name='q']").type(name)
    cy.get("textarea[name='q']").type('{enter}');
  })

    cy.screenshot('./sample/image2',{
      capture: 'runner',
      scale: true,
      overwrite: true,
    })


  })

  it('Get Browser Properties',()=>{


    cy.window().then((win) => {
      const browserName = win.location;
      // const browserVersion = win.navigator.appVersion;
      // const userAgent = win.navigator.userAgent;
      console.log('browserName',browserName);
      });
 
      // console.log('browserVersion',browserVersion);
      // console.log('userAgent',userAgent);
  })



})