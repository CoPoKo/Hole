/*!
 * ==========================================================================
 * "CoPoKo Hole" License
 * GNU General Public License version 3.0 (GPLv3)
 * ==========================================================================
 * This file is part of "CoPoKo Hole"
 *
 * "CoPoKo Hole" is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * "CoPoKo Hole" is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with "CoPoKo Hole". If not, see <http://www.gnu.org/licenses/>.
 * ==========================================================================
*/
declare module '*.css';

export declare global {
  interface Window {
    HoleInitComponentsCallback: Function;
  }
}