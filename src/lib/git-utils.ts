import { execSync } from 'child_process';

/**
 * Gets the last commit date for the repository
 * @returns {string} Formatted date string of the last commit
 */
export async function getLastCommitDate(): Promise<string> {
  'use server'; // Mark this function as a server action

  try {
    // Get the last commit date
    const dateStr = execSync('git log -1 --format=%cd').toString().trim();
    const date = new Date(dateStr);

    // Format the date as Month Day, Year
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch (error) {
    console.error('Error getting git commit date:', error);
    return 'Unknown date';
  }
}
