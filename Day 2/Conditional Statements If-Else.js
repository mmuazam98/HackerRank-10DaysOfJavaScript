function getGrade(score) {
  let grade, i, j;
  j = 25;
  for (i = 0; i < 6; i++) {
    if (score > j && score <= j + 5) {
      grade = String.fromCharCode(65 + i);
      break;
    }
    j = j - 5;
  }
  return grade;
}
