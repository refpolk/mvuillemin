casper.test.begin('Tests', 12, function(test) {
	
  casper.start("http://mvuillemin.local/", function() {
		
		/* Title */
      
		test.assertTitle("Vuillemin", "Page title is correct");

		/* Header */
				
		test.assertExists('.container .head a h1', 'Main title is found');
		// click on title reload page, set section = 1 and image = 1
		test.assertEquals(this.fetchText('.container .head a h1'), 'Vuillemin','Main title is correct');
		
		/* Navigation */
		
		test.assertExists('.container .head .nav', 'Main nav is found');
		test.assertExists('.container .head .nav li:nth-child(1) a.active', 'First nav item found and active');
		test.assertExists('.container .head .nav li:nth-child(2) a', 'Second nav item found');
		test.assertExists('.container .head .nav li:nth-child(3) a', 'Third nav item found');
		
		test.assertEquals(this.fetchText('.container .head .nav li:nth-child(1) a'), 'Carnets','First nav item is correct');
		test.assertEquals(this.fetchText('.container .head .nav li:nth-child(2) a'), 'Tableaux','Second nav item is correct');
		test.assertEquals(this.fetchText('.container .head .nav li:nth-child(3) a'), 'Visages','Third nav item is correct');
		
		// nav item has data-section and title
		// nav item click shows correct section, hide others, set the clicked item as active
		//
		
		/* Content */
		
		// Titre de section trouvé et correct
		// Nombre de sections correct
		// Images on un attribut alt
		test.assertExists('.container .content .section .head h2', 'Section title is found');
		
		
		// Previous and next buttons are displayed, have data-target and title
		// The first 2 images only are loaded
		// Click on next display the next image and loads the next +1 and removes the data-src and updates the array
		
		/* Footer */

		test.assertExists('.container .footer', 'Footer is found');
		test.assertEquals(this.fetchText('.container .footer'), '© Vuillemin 2017','Footer content is correct');
		
		/* Check for 404 errors */
				
		
  }).run(function() {
		
		test.done();
		
  });
	
});