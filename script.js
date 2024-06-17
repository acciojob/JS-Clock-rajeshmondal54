it('should correctly rotate the minute hand', () => {
  const now = new Date();
  const mins = now.getMinutes();
  const minsDegrees = 6 * mins + 90;
  const radians = minsDegrees * Math.PI / 180;

  // Calculate expected values of the rotation matrix
  const expectedA = Math.cos(radians);
  const expectedB = Math.sin(radians);
  const expectedC = -expectedB;
  const expectedD = expectedA;

  // Get the current transform matrix of .min-hand
  cy.get('.min-hand').invoke('css', 'transform').then(transform => {
    // Parse the transform matrix into its components
    const matrix = transform.split('(')[1].split(')')[0].split(',').map(parseFloat);
    const actualA = matrix[0];
    const actualB = matrix[1];
    const actualC = matrix[2];
    const actualD = matrix[3];

    // Compare the actual and expected values within a tolerance
    const tolerance = 0.01; // Adjust tolerance level as needed
    expect(actualA).to.be.closeTo(expectedA, tolerance);
    expect(actualB).to.be.closeTo(expectedB, tolerance);
    expect(actualC).to.be.closeTo(expectedC, tolerance);
    expect(actualD).to.be.closeTo(expectedD, tolerance);
  });
});