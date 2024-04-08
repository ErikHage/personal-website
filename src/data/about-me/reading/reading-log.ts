import { BookRecord } from './types';

const data: BookRecord[] = [
  {
    title: 'Storm of Swords',
    series: 'Song of Ice and Fire',
    installment: 3,
    author: 'George R. R. Martin',
    start: new Date('11/5/11'),
    finish: new Date('11/26/11'),
  },
  {
    title: 'Imperium',
    series: 'Cicero',
    installment: 1,
    author: 'Robert Harris',
    start: new Date('11/26/11'),
    finish: new Date('12/7/11'),
  },
  {
    title: 'Conspirata',
    series: 'Cicero',
    installment: 2,
    author: 'Robert Harris',
    start: new Date('12/7/11'),
    finish: new Date('12/16/11'),
  },
  {
    title: 'Ashes of a Black Frost',
    series: 'Iron Elves',
    installment: 3,
    author: 'Chris Evans',
    start: new Date('12/17/11'),
    finish: new Date('12/26/11'),
  },
  {
    title: 'The Hunger Games',
    series: 'The Hunger Games',
    installment: 1,
    author: 'Suzanne Collins',
    start: new Date('12/27/11'),
    finish: new Date('12/29/11'),
  },
  {
    title: 'Catching Fire',
    series: 'The Hunger Games',
    installment: 2,
    author: 'Suzanne Collins',
    start: new Date('12/30/11'),
    finish: new Date('1/3/12'),
  },
  {
    title: 'Mockingjay',
    series: 'The Hunger Games',
    installment: 3,
    author: 'Suzanne Collins',
    start: new Date('1/3/12'),
    finish: new Date('1/8/12'),
  },
  {
    title: 'World War Z',
    start: new Date('1/9/12'),
    finish: new Date('1/20/12'),
  },
  {
    title: 'The Chase',
    series: 'Isaac Bell',
    start: new Date('1/21/12'),
    finish: new Date('2/2/12'),
  },
  {
    title: 'The King\'s Bastard',
    start: new Date('2/3/12'),
    finish: new Date('2/18/12'),
  },
  {
    title: 'The Uncrowned King',
    start: new Date('2/18/12'),
    finish: new Date('2/28/12'),
  },
  {
    title: 'The Usurper',
    start: new Date('2/29/12'),
    finish: new Date('3/10/12'),
  },
  {
    title: 'Feast for Crows: Song of Ice and Fire Book 4',
    start: new Date('3/10/12'),
    finish: new Date('3/28/12'),
  },
  {
    title: 'Pride and Prejudice and Zombies',
    start: new Date('3/28/12'),
    finish: new Date('4/12/12'),
  },
  {
    title: 'The Wrecker: Isaac Bell',
    start: new Date('4/13/12'),
    finish: new Date('4/29/12'),
  },
  {
    title: 'The Spy: Isaac Bell',
    start: new Date('4/30/12'),
    finish: new Date('5/9/12'),
  },
  {
    title: 'Honor Harrington: A Rising Thunder',
    start: new Date('5/10/12'),
    finish: new Date('5/24/12'),
  },
  {
    title: 'Crown of Slaves',
    start: new Date('5/28/12'),
    finish: new Date('7/2/12'),
  },
  {
    title: 'Torch of Freedom',
    start: new Date('7/2/12'),
    finish: new Date('7/28/12'),
  },
  {
    title: 'The Shadow of Saganami',
    start: new Date('7/30/12'),
    finish: new Date('9/5/12'),
  },
  {
    title: 'Dance of Dragons: Song of Ice and Fire Book 5',
    start: new Date('9/6/12'),
    finish: new Date('10/6/12'),
  },
  {
    title: 'Midst Toil and Tribulation: Safehold Book 6',
    start: new Date('10/7/12'),
    finish: new Date('10/26/12'),
  },
  {
    title: 'The Race: Isaac Bell',
    start: new Date('10/26/12'),
    finish: new Date('11/1/12'),
  },
  {
    title: 'In Fury Born',
    start: new Date('11/1/12'),
    finish: new Date('11/22/12'),
  },
  {
    title: 'The Wind Through the Keyhole: Dark Tower 4.5',
    start: new Date('11/23/12'),
    finish: new Date('12/4/12'),
  },
  {
    title: 'Wizards First Rule: Sword of Truth 1',
    start: new Date('12/5/12'),
    finish: new Date('12/18/12'),
  },
  {
    title: 'Stone of Tears: Sword of Truth 2',
    start: new Date('12/19/12'),
    finish: new Date('1/21/13'),
  },
  {
    title: 'Mysterious Island',
    start: new Date('1/11/13'),
    finish: new Date('1/28/13'),
  },
  {
    title: 'Blood of the Fold: Sword of Truth 3',
    start: new Date('1/29/13'),
    finish: new Date('2/4/13'),
  },
  {
    title: 'Temple of the Winds: Sword of Truth 4',
    start: new Date('2/4/13'),
    finish: new Date('2/16/13'),
  },
  {
    title: 'Soul of the Fire: Sword of Truth 5',
    start: new Date('2/17/13'),
    finish: new Date('3/1/13'),
  },
  {
    title: 'On Basilisk Station: Honor Harrington 1',
    start: new Date('3/1/13'),
    finish: new Date('3/6/13'),
  },
  {
    title: 'The Hobbit',
    start: new Date('3/6/13'),
    finish: new Date('3/10/13'),
  },
  {
    title: 'Faith of the Fallen: Sword of Truth 6',
    start: new Date('3/11/13'),
    finish: new Date('3/21/13'),
  },
  {
    title: 'Pillars of Creation: Sword of Truth 7',
    start: new Date('3/22/13'),
    finish: new Date('3/31/13'),
  },
  {
    title: 'Naked Empire: Sword of Truth 8',
    start: new Date('3/31/13'),
    finish: new Date('4/14/13'),
  },
  {
    title: 'Chainfire: Sword of Truth 9',
    start: new Date('4/15/13'),
    finish: new Date('4/30/13'),
  },
  {
    title: 'Phantom: Sword of Truth 10',
    start: new Date('5/1/13'),
    finish: new Date('5/18/13'),
  },
  {
    title: 'Confessor: Sword of Truth 11',
    start: new Date('5/19/13'),
    finish: new Date('5/31/13'),
  },
  {
    title: 'The Gunslinger: Dark Tower 1',
    start: new Date('6/1/13'),
    finish: new Date('6/4/13'),
  },
  {
    title: 'Shadow of Freedom: Honor Harrington',
    start: new Date('6/5/13'),
    finish: new Date('6/17/13'),
  },
  {
    title: 'The Sword of Shannara',
    start: new Date('6/17/13'),
    finish: new Date('7/5/13'),
  },
  {
    title: 'The Drawing of the Three: Dark Tower 2',
    start: new Date('7/5/13'),
    finish: new Date('7/19/13'),
  },
  {
    title: 'The Waste Lands: Dark Tower 3',
    start: new Date('7/19/13'),
    finish: new Date('8/7/13'),
  },
  {
    title: 'Wizard and Glass: Dark Tower 4',
    start: new Date('8/8/13'),
    finish: new Date('9/9/13'),
  },
  {
    title: 'The Elfstones of Shannara',
    start: new Date('9/10/13'),
    finish: new Date('9/21/13'),
  },
  {
    title: 'The Fellowship of the Ring',
    start: new Date('9/21/13'),
    finish: new Date('10/7/13'),
  },
  {
    title: 'Wolves of the Calla: Dark Tower 5',
    start: new Date('10/8/13'),
    finish: new Date('11/3/13'),
  },
  {
    title: 'Crucible of Gold: Temeraire',
    start: new Date('11/3/13'),
    finish: new Date('11/15/13'),
  },
  {
    title: 'Blood of Tyrants: Temeraire',
    start: new Date('11/16/13'),
    finish: new Date('11/24/13'),
  },
  {
    title: 'Theft of Swords: Ryiria Revelations 1',
    start: new Date('11/24/13'),
    finish: new Date('12/10/13'),
  },
  {
    title: 'Rise of an Empire: Ryiria Revelations 2',
    start: new Date('12/10/13'),
    finish: new Date('12/18/13'),
  },
  {
    title: 'Heir of Novron: Ryiria Revelations 3',
    start: new Date('12/18/13'),
    finish: new Date('1/1/14'),
  },
  {
    title: 'Song of Susannah: Dark Tower 6',
    start: new Date('1/1/14'),
    finish: new Date('1/9/14'),
  },
  {
    title: 'The First King of Shannara',
    start: new Date('1/9/14'),
    finish: new Date('1/18/14'),
  },
  {
    title: 'The Dark Tower: Dark Tower 7',
    start: new Date('1/19/14'),
    finish: new Date('2/7/14'),
  },
  {
    title: 'Hyperion',
    start: new Date('2/7/14'),
    finish: new Date('2/15/14'),
  },
  {
    title: 'Fall of Hyperion',
    start: new Date('2/16/14'),
    finish: new Date('2/28/14'),
  },
  {
    title: 'Endymion',
    start: new Date('3/1/14'),
    finish: new Date('3/12/14'),
  },
  {
    title: 'Rise of Endymion',
    start: new Date('3/13/14'),
    finish: new Date('3/25/14'),
  },
  {
    title: 'Lord Foul\'s Bane: Thomas Covanent 1',
    start: new Date('3/26/14'),
    finish: new Date('4/7/14'),
  },
  {
    title: 'Illearth War: Thomas Covanent 2',
    start: new Date('4/8/14'),
    finish: new Date('4/21/14'),
  },
  {
    title: 'The Power that Preserves: Thomas Covanent 3',
    start: new Date('4/21/14'),
    finish: new Date('5/3/14'),
  },
  {
    title: 'The Final Empire : Mistborn 1',
    start: new Date('5/12/14'),
    finish: new Date('5/24/14'),
  },
  {
    title: 'The Well of Ascension: Mistborn 2',
    start: new Date('5/25/14'),
    finish: new Date('6/5/14'),
  },
  {
    title: 'The Hero of Ages: Mistborn 3',
    start: new Date('6/6/14'),
    finish: new Date('6/15/14'),
  },
  {
    title: 'The Wishsong of Shannara: Shannara 3',
    start: new Date('6/16/14'),
    finish: new Date('6/26/14'),
  },
  {
    title: 'The Alloy of Law: Mistborn novel',
    start: new Date('6/26/14'),
    finish: new Date('6/30/14'),
  },
  {
    title: 'The Wounded Land: Thomas Covanent 4',
    start: new Date('7/1/14'),
    finish: new Date('7/15/14'),
  },
  {
    title: 'The One Tree: Thomas Covanent 5',
    start: new Date('7/16/14'),
    finish: new Date('7/30/14'),
  },
  {
    title: 'White Gold Weilder: Thomas Covanent 6',
    start: new Date('7/31/14'),
    finish: new Date('8/14/14'),
  },
  {
    title: 'Like a Mighty Army: Safehold 7',
    start: new Date('8/15/14'),
    finish: new Date('9/13/14'),
  },
  {
    title: 'Off Armageddon Reef: Safehold 1',
    start: new Date('9/14/14'),
    finish: new Date('10/1/14'),
  },
  {
    title: 'By Schizm Rent Asunder: Safehold 2',
    start: new Date('10/2/14'),
    finish: new Date('10/15/14'),
  },
  {
    title: 'Ender\'s Game: Ender Saga 1',
    start: new Date('10/16/14'),
    finish: new Date('10/19/14'),
  },
  {
    title: 'Speaker of the Dead: Ender Saga 2',
    start: new Date('10/20/14'),
    finish: new Date('10/30/14'),
  },
  {
    title: 'Xenocide: Ender Saga 3',
    start: new Date('10/31/14'),
    finish: new Date('11/8/14'),
  },
  {
    title: 'Children of the Mind: Ender 4',
    start: new Date('11/9/14'),
    finish: new Date('11/17/14'),
  },
  {
    title: 'Ender\'s Shadow: Ender Shadow 1',
    start: new Date('11/18/14'),
    finish: new Date('12/2/14'),
  },
  {
    title: 'The Runes of the Earth: Thomas Covanent 7',
    start: new Date('12/3/14'),
    finish: new Date('12/25/14'),
  },
  {
    title: 'Fatal Revenant: Thomas Covanent 8',
    start: new Date('12/26/14'),
    finish: new Date('1/21/15'),
  },
  {
    title: 'Against All Things Ending: Thomas Covanent 9',
    start: new Date('1/21/15'),
    finish: new Date('2/14/15'),
  },
  {
    title: 'The Last Dark: Thomas Covanent 10',
    start: new Date('2/14/15'),
    finish: new Date('3/10/15'),
  },
  {
    title: 'Prince of Thorns: Broken Empire 1',
    start: new Date('3/10/15'),
    finish: new Date('3/15/15'),
  },
  {
    title: 'King of Thorns: Broken Empire 2',
    start: new Date('3/15/15'),
    finish: new Date('3/26/15'),
  },
  {
    title: 'Emperor of Thorns: Broken Empire 3',
    start: new Date('3/26/15'),
    finish: new Date('4/8/15'),
  },
  {
    title: 'Shadow of the Hegemon: Ender Shadow 2',
    start: new Date('4/9/15'),
    finish: new Date('4/18/15'),
  },
  {
    title: 'Shadow Puppets: Ender Shadow 3',
    start: new Date('4/19/15'),
    finish: new Date('4/28/15'),
  },
  {
    title: 'Shadow of the Giant: Ender Shadow 4',
    start: new Date('4/29/15'),
    finish: new Date('5/5/15'),
  },
  {
    title: 'Ender in Exile',
    start: new Date('5/6/15'),
    finish: new Date('5/14/15'),
  },
  {
    title: 'The Slow Regard of Silent Things: Kingkiller 2.5',
    start: new Date('5/15/15'),
    finish: new Date('5/19/15'),
  },
  {
    title: 'The Wise Man\'s Fear: Kingkiller 2',
    start: new Date('5/20/15'),
    finish: new Date('6/10/15'),
  },
  {
    title: 'Cauldron of Ghosts: Honor Harrington',
    start: new Date('6/11/15'),
    finish: new Date('7/1/15'),
  },
  {
    title: 'Who Fears Death',
    start: new Date('7/1/15'),
    finish: new Date('7/11/15'),
  },
  {
    title: 'The Book of Phoenix',
    start: new Date('7/11/15'),
    finish: new Date('7/15/15'),
  },
  {
    title: 'Magician: Apprentice: Riftwar Saga 1',
    start: new Date('7/15/15'),
    finish: new Date('7/23/15'),
  },
  {
    title: 'Magician: Master: Riftwar Saga 2',
    start: new Date('7/23/15'),
    finish: new Date('7/31/15'),
  },
  {
    title: 'Silverthorn: Riftwar Saga 3',
    start: new Date('7/31/15'),
    finish: new Date('8/12/15'),
  },
  {
    title: 'A Darkness at Sethanon: Riftwar Saga 4',
    start: new Date('8/12/15'),
    finish: new Date('8/24/15'),
  },
  {
    title: 'Daughter of the Empire: Empire Trilogy 1',
    start: new Date('8/25/15'),
    finish: new Date('9/5/15'),
  },
  {
    title: 'Servant of the Empire: Empire Trilogy 2',
    start: new Date('9/6/15'),
    finish: new Date('10/6/15'),
  },
  {
    title: 'Mistress of the Empire: Empire Trilogy 3',
    start: new Date('10/7/15'),
    finish: new Date('11/5/15'),
  },
  {
    title: 'Hell\'s Foundations Quiver: Safehold 8',
    start: new Date('11/6/15'),
    finish: new Date('11/28/15'),
  },
  {
    title: 'The Alloy of Law: Mistborn 4',
    start: new Date('11/29/15'),
    finish: new Date('12/16/15'),
  },
  {
    title: 'Shadows of Self: Mistborn 5',
    start: new Date('12/16/15'),
    finish: new Date('12/26/15'),
  },
  {
    title: 'Elantris',
    start: new Date('12/27/15'),
    finish: new Date('1/11/16'),
  },
  {
    title: 'The Emperor\'s Soul',
    start: new Date('1/12/16'),
    finish: new Date('1/14/16'),
  },
  {
    title: 'Steelheart: The Reckoners 1',
    start: new Date('1/15/16'),
    finish: new Date('1/16/16'),
  },
  {
    title: 'Mitosis: The Reckoners 1.5',
    start: new Date('1/16/16'),
    finish: new Date('1/17/16'),
  },
  {
    title: 'Firefight: The Reckoners 2',
    start: new Date('1/18/16'),
    finish: new Date('1/22/16'),
  },
  {
    title: 'Warbreaker',
    start: new Date('1/23/16'),
    finish: new Date('2/8/16'),
  },
  {
    title: 'Promise of Blood: Powder Mage 1',
    start: new Date('2/9/16'),
    finish: new Date('2/21/16'),
  },
  {
    title: 'Calamity: The Reckoners 3',
    start: new Date('2/21/16'),
    finish: new Date('2/26/16'),
  },
  {
    title: 'Bands of Mourning: Mistborn 6',
    start: new Date('2/26/16'),
    finish: new Date('3/2/16'),
  },
  {
    title: 'Mistborn Secret History: Mistborn 6.5',
    start: new Date('3/2/16'),
    finish: new Date('3/5/16'),
  },
  {
    title: 'The Crimson Campaign: Powder Mage 2',
    start: new Date('3/6/16'),
    finish: new Date('3/17/16'),
  },
  {
    title: 'The Autumn Republic: Powder Mage 3',
    start: new Date('3/18/16'),
    finish: new Date('3/27/16'),
  },
  {
    title: 'The Eye of the World: Wheel of Time 1',
    start: new Date('3/27/16'),
    finish: new Date('5/10/16'),
  },
  {
    title: 'The Great Hunt: Wheel of Time 2',
    start: new Date('5/11/16'),
    finish: new Date('6/2/16'),
  },
  {
    title: 'The Dragon Reborn: Wheel of Time 3',
    start: new Date('6/3/16'),
    finish: new Date('6/23/16'),
  },
  {
    title: 'The Shadow Rising: Wheel of Time 4',
    start: new Date('6/24/16'),
    finish: new Date('7/25/16'),
  },
  {
    title: 'The Fires of Heaven: Wheel of Time 5',
    start: new Date('7/26/16'),
    finish: new Date('8/25/16'),
  },
  {
    title: 'Lord of Chaos: Wheel of Time 6',
    start: new Date('8/29/16'),
    finish: new Date('9/30/16'),
  },
  {
    title: 'A Crown of Swords: Wheel of Time 7',
    start: new Date('10/1/16'),
    finish: new Date('10/26/16'),
  },
  {
    title: 'The Path of Daggers: Wheel of Time 8',
    start: new Date('10/27/16'),
    finish: new Date('11/25/16'),
  },
  {
    title: 'Winter\'s Heart: Wheel of Time 9',
    start: new Date('11/25/16'),
    finish: new Date('12/19/16'),
  },
  {
    title: 'Crossroads of Twilight: Wheel of Time 10',
    start: new Date('12/20/16'),
    finish: new Date('1/20/17'),
  },
  {
    title: 'Knife of Dreams: Wheel of Time 11',
    start: new Date('1/21/17'),
    finish: new Date('2/22/17'),
  },
  {
    title: 'The Gathering Storm: Wheel of Time 12',
    start: new Date('2/22/17'),
    finish: new Date('3/10/17'),
  },
  {
    title: 'Towers of Midnight: Wheel of Time 13',
    start: new Date('3/10/17'),
    finish: new Date('3/25/17'),
  },
  {
    title: 'A Memory of Light: Wheel of Time 14',
    start: new Date('3/26/17'),
    finish: new Date('4/10/17'),
  },
  {
    title: 'Way of Kings: Stormlight Archive 1',
    start: new Date('4/11/17'),
    finish: new Date('5/8/17'),
  },
  {
    title: 'Words of Radiance: Stormlight Archive 2',
    start: new Date('5/9/17'),
    finish: new Date('5/29/17'),
  },
  {
    title: 'The Final Empire : Mistborn 1',
    start: new Date('5/29/17'),
    finish: new Date('6/11/17'),
  },
  {
    title: 'The Well of Ascension: Mistborn 2',
    start: new Date('6/11/17'),
    finish: new Date('6/26/17'),
  },
  {
    title: 'The Hero of Ages: Mistborn 3',
    start: new Date('6/27/17'),
    finish: new Date('7/14/17'),
  },
  {
    title: 'The Alloy of Law: Wax and Wane 1',
    start: new Date('7/15/17'),
    finish: new Date('7/25/17'),
  },
  {
    title: 'Prince of the Blood: Krondor\'s Sons 1',
    start: new Date('7/26/17'),
    finish: new Date('8/4/17'),
  },
  {
    title: 'The King\'s Buccaneer: Krondor\'s Sons 2',
    start: new Date('8/5/17'),
    finish: new Date('8/20/17'),
  },
  {
    title: 'Shadow of a Dark Queen: Serpent War Saga 1',
    start: new Date('8/21/17'),
    finish: new Date('9/5/17'),
  },
  {
    title: 'Rise of a Merchant Prince: Serpent War Saga 2',
    start: new Date('9/6/17'),
    finish: new Date('9/12/17'),
  },
  {
    title: 'Rage of a Demon King: Serpent War Saga 3',
    start: new Date('9/13/17'),
    finish: new Date('9/18/17'),
  },
  {
    title: 'Shards of a Broken Crown: Serpent War Saga 4',
    start: new Date('9/19/17'),
    finish: new Date('9/25/17'),
  },
  {
    title: 'Krondor: The Betrayal: Riftwar Legacy 1',
    start: new Date('9/26/17'),
    finish: new Date('10/5/17'),
  },
  {
    title: 'Krondor: The Assassins: Riftwar Legacy 2',
    start: new Date('10/6/17'),
    finish: new Date('10/14/17'),
  },
  {
    title: 'Krondor: Tear of the Gods: Riftwar Legacy 3',
    start: new Date('10/15/17'),
    finish: new Date('10/23/17'),
  },
  {
    title: 'Honoured Enemy: Legends of the Riftwar 1',
    start: new Date('10/24/17'),
    finish: new Date('11/6/17'),
  },
  {
    title: 'Murder in LaMut: Legends of the Riftwar 2',
    start: new Date('11/7/17'),
    finish: new Date('11/17/17'),
  },
  {
    title: 'Jimmy the Hand: Legends of the Riftwar 3',
    start: new Date('11/18/17'),
    finish: new Date('11/27/17'),
  },
  {
    title: 'Talon of the Silver Hawk: Conclave of Shadows 1',
    start: new Date('11/28/17'),
    finish: new Date('12/7/17'),
  },
  {
    title: 'King of Foxes: Conclave of Shadows 2',
    start: new Date('12/8/17'),
    finish: new Date('12/17/17'),
  },
  {
    title: 'Exile\'s Return: Conclave of Shadows 3',
    start: new Date('12/18/17'),
    finish: new Date('12/26/17'),
  },
  {
    title: 'Edgedancer: Stormlight Archive 2.5',
    start: new Date('12/26/17'),
    finish: new Date('12/28/17'),
  },
  {
    title: 'Oathbringer: Stormlight Archive 3',
    start: new Date('12/28/17'),
    finish: new Date('1/19/18'),
  },
  {
    title: 'Flight of the Nighthawks: The Darkwar Saga 1',
    start: new Date('1/21/18'),
    finish: new Date('1/28/18'),
  },
  {
    title: 'Into a Dark Realm: The Darkwar Saga 2',
    start: new Date('1/29/18'),
    finish: new Date('2/6/18'),
  },
  {
    title: 'Wrath of a Mad God: The Darkwar Saga 3',
    start: new Date('2/6/18'),
    finish: new Date('2/16/18'),
  },
  {
    title: 'Steelheart: The Reckoners 1',
    start: new Date('2/16/18'),
    finish: new Date('2/20/18'),
  },
  {
    title: 'Firefight: The Reckoners 2',
    start: new Date('2/21/18'),
    finish: new Date('2/25/18'),
  },
  {
    title: 'Calamity: The Reckoners 3',
    start: new Date('2/26/18'),
    finish: new Date('3/1/18'),
  },
  {
    title: 'On Basilisk Station: Honor Harrington 1',
    start: new Date('3/1/18'),
    finish: new Date('3/12/18'),
  },
  {
    title: 'The Honor of the Queen: Honor Harrington 2',
    start: new Date('3/13/18'),
    finish: new Date('3/22/18'),
  },
  {
    title: 'The Short Victorious War: Honor Harrington 3',
    start: new Date('3/23/18'),
    finish: new Date('3/30/18'),
  },
  {
    title: 'Field of Dishonor: Honor Harrington 4',
    start: new Date('3/31/18'),
    finish: new Date('4/7/18'),
  },
  {
    title: 'Flag in Exile: Honor Harrington 5',
    start: new Date('4/8/18'),
    finish: new Date('4/15/18'),
  },
  {
    title: 'Honor Among Enemies: Honor Harrington 6',
    start: new Date('4/16/18'),
    finish: new Date('4/27/18'),
  },
  {
    title: 'In Enemey Hands: Honor Harrington 7',
    start: new Date('4/28/18'),
    finish: new Date('5/7/18'),
  },
  {
    title: 'Echoes of Honor: Honor Harrington 8',
    start: new Date('5/7/18'),
    finish: new Date('5/21/18'),
  },
  {
    title: 'Ashes of Victory: Honor Harrington 9',
    start: new Date('5/21/18'),
    finish: new Date('6/3/18'),
  },
  {
    title: 'War of Honor: Honor Harringotn 10',
    start: new Date('6/3/18'),
    finish: new Date('7/2/18'),
  },
  {
    title: 'At All Costs: Honor Harrington 11',
    start: new Date('7/2/18'),
    finish: new Date('7/24/18'),
  },
  {
    title: 'Mission of Honor: Honor Harrington 12',
    start: new Date('7/24/18'),
    finish: new Date('8/6/18'),
  },
  {
    title: 'A Rising Thunder: Honor Harrington 13',
    start: new Date('8/7/18'),
    finish: new Date('8/20/18'),
  },
  {
    title: 'The Keep: Adversary Cycle 1',
    start: new Date('8/21/18'),
    finish: new Date('9/1/18'),
  },
  {
    title: 'The Tomb: Adversary Cycle 2 / Repairman Jack 1',
    start: new Date('9/2/18'),
    finish: new Date('9/13/18'),
  },
  {
    title: 'The Touch: Adversary Cycle 3',
    start: new Date('9/14/18'),
    finish: new Date('9/25/18'),
  },
  {
    title: 'Reborn: Adversary Cycle 4',
    start: new Date('9/25/18'),
    finish: new Date('9/30/18'),
  },
  {
    title: 'Legacies: Repairman Jack 2',
    start: new Date('10/1/18'),
    finish: new Date('10/8/18'),
  },
  {
    title: 'Conspiracies: Reapirman Jack 3',
    start: new Date('10/8/18'),
    finish: new Date('10/19/18'),
  },
  {
    title: 'All the Rage: Repairman Jack 4',
    start: new Date('10/21/18'),
    finish: new Date('10/29/18'),
  },
  {
    title: 'The Barrens',
    start: new Date('10/29/18'),
    finish: new Date('10/30/18'),
  },
  {
    title: 'Peabody & Ozymandius Traveling Circus and Oddity Emporium',
    start: new Date('10/31/18'),
    finish: new Date('11/1/18'),
  },
  {
    title: 'Hosts: Repairman Jack 5',
    start: new Date('11/2/18'),
    finish: new Date('11/10/18'),
  },
  {
    title: 'The Haunted Air: Repairman Jack 6',
    start: new Date('11/11/18'),
    finish: new Date('11/21/18'),
  },
  {
    title: 'Gateways: Repairman Jack 7',
    start: new Date('11/22/18'),
    finish: new Date('11/29/18'),
  },
  {
    title: 'Crisscross: Repairman Jack 8',
    start: new Date('11/30/18'),
    finish: new Date('12/12/18'),
  },
  {
    title: 'Infernal: Repairman Jack 9',
    start: new Date('12/13/18'),
    finish: new Date('12/20/18'),
  },
  {
    title: 'Harbingers: Repairman Jack 10',
    start: new Date('12/20/18'),
    finish: new Date('12/28/18'),
  },
  {
    title: 'Bloodlines: Repairman Jack 11',
    start: new Date('12/28/18'),
    finish: new Date('1/9/19'),
  },
  {
    title: 'By The Sword: Repairman Jack 12',
    start: new Date('1/9/19'),
    finish: new Date('1/21/19'),
  },
  {
    title: 'Ground Zero: Repairman Jack 13',
    start: new Date('1/21/19'),
    finish: new Date('1/30/19'),
  },
  {
    title: 'Fatal Error: Repairman Jack 14',
    start: new Date('1/30/19'),
    finish: new Date('2/6/19'),
  },
  {
    title: 'Reprisal: Adversary Cycle 5',
    start: new Date('2/6/19'),
    finish: new Date('2/13/19'),
  },
  {
    title: 'The Dark at the End: Repairman Jack 15',
    start: new Date('2/13/19'),
    finish: new Date('2/21/19'),
  },
  {
    title: 'Demonsong',
    start: new Date('2/22/19'),
    finish: new Date('2/22/19'),
  },
  {
    title: 'The Compendium of Srem',
    start: new Date('2/23/19'),
    finish: new Date('2/24/19'),
  },
  {
    title: 'Aryans and Absinthe',
    start: new Date('2/25/19'),
    finish: new Date('2/26/19'),
  },
  {
    title: 'The Tenants',
    start: new Date('2/27/19'),
    finish: new Date('2/28/19'),
  },
  {
    title: 'Black Wind',
    start: new Date('2/28/19'),
    finish: new Date('3/29/19'),
  },
  {
    title: 'Nightworld: Adversary Cycle 6',
    start: new Date('3/29/19'),
    finish: new Date('4/11/19'),
  },
  {
    title: 'Jack: Secret Histories',
    start: new Date('4/16/19'),
    finish: new Date('4/24/19'),
  },
  {
    title: 'Jack: Secret Circles',
    start: new Date('4/25/19'),
    finish: new Date('5/5/19'),
  },
  {
    title: 'Rufugee: Bio of a Space Tyrant 1',
    start: new Date('5/6/19'),
    finish: new Date('6/19/19'),
  },
  {
    title: 'Mercenary: Bio of a Space Tyrant 2',
    start: new Date('6/20/19'),
    finish: new Date('7/24/19'),
  },
  {
    title: 'Politician: Bio of a Space Tyrant 3',
    start: new Date('7/25/19'),
    finish: new Date('9/15/19'),
  },
  {
    title: 'Executive: Bio of a Space Tyrant 4',
    start: new Date('9/16/19'),
    finish: new Date('11/12/19'),
  },
  {
    title: 'Statesman: Bio of a Space Tyrant 5',
    start: new Date('11/13/19'),
    finish: new Date('12/31/19'),
  },
  {
    title: 'Rides a Dread Legion: Demonwar Saga 1',
    start: new Date('1/1/20'),
    finish: new Date('1/31/20'),
  },
  {
    title: 'At the Gates of Darkness: Demonwar Saga 2',
    start: new Date('2/1/20'),
    finish: new Date('2/21/20'),
  },
  {
    title: 'Kingdom Besieged: Chaoswar Saga 1',
    start: new Date('2/22/20'),
    finish: new Date('3/5/20'),
  },
  {
    title: 'A Crown Imperilled: Chaoswar Saga 2',
    start: new Date('3/6/20'),
    finish: new Date('3/23/20'),
  },
  {
    title: 'Magician\'s End: Chaoswar Saga 3',
    start: new Date('3/24/20'),
    finish: new Date('4/14/20'),
  },
  {
    title: 'Three Body Problem: Remembrance of Earth\'s Past 1',
    start: new Date('5/26/20'),
    finish: new Date('6/10/20'),
  },
  {
    title: 'The Dark Forest: Remembrance of Earth\'s Past 2',
    start: new Date('6/11/20'),
    finish: new Date('7/27/20'),
  },
  {
    title: 'Death\'s End: Remembrance of Earth\'s Past 3',
    start: new Date('7/28/20'),
    finish: new Date('8/23/20'),
  },
  {
    title: 'Oathbringer: Stormlight Archive 3',
    start: new Date('8/24/20'),
    finish: new Date('11/16/20'),
  },
  {
    title: 'Dawnshard: Stormlight Archive 3.5',
    start: new Date('11/17/20'),
    finish: new Date('11/26/20'),
  },
  {
    title: 'Rythym of War: Stormlight Archive 4',
    start: new Date('11/26/20'),
    finish: new Date('12/27/20'),
  },
  {
    title: 'Dune: Dune 1',
    start: new Date('1/3/21'),
    finish: new Date('1/24/21'),
  },
  {
    title: 'Dune Messiah: Dune 2',
    start: new Date('1/25/21'),
    finish: new Date('2/15/21'),
  },
  {
    title: 'Skyward: Skyward 1',
    start: new Date('2/15/21'),
    finish: new Date('2/18/21'),
  },
  {
    title: 'Starsight: Skyward 2',
    start: new Date('2/18/21'),
    finish: new Date('2/28/21'),
  },
  {
    title: 'Children of Dune: Dune 3',
    start: new Date('2/28/21'),
    finish: new Date('4/20/21'),
  },
  {
    title: 'Pawn of Prophecy: Belgaraid 1',
    start: new Date('4/22/21'),
    finish: new Date('5/2/21'),
  },
  {
    title: 'Queen of Sorcery: Belgaraid 2',
    start: new Date('5/2/21'),
    finish: new Date('5/5/21'),
  },
  {
    title: 'Magician\'s Gambit: Belgaraid 3',
    start: new Date('5/6/21'),
    finish: new Date('5/14/21'),
  },
  {
    title: 'Castle of Wizardry: Belgaraid 4',
    start: new Date('5/15/21'),
    finish: new Date('5/26/21'),
  },
  {
    title: 'Enchanter\'s Endgame: Belgaraid 5',
    start: new Date('5/27/21'),
    finish: new Date('6/10/21'),
  },
  {
    title: 'Devices and Desires: Engineer Trilogy 1',
    start: new Date('6/11/21'),
    finish: new Date('7/22/21'),
  },
  {
    title: 'Evil for Evil: Engineer Trilogy 2',
    start: new Date('7/23/21'),
    finish: new Date('9/11/21'),
  },
  {
    title: 'The Escapement: Engineer Trilogy 3',
    start: new Date('9/18/21'),
    finish: new Date('10/23/21'),
  },
  {
    title: 'Sunreach: Skyward 2.1',
    start: new Date('10/24/21'),
    finish: new Date('10/31/21'),
  },
  {
    title: 'Redawn: Skyward 2.2',
    start: new Date('11/1/21'),
    finish: new Date('11/4/21'),
  },
  {
    title: 'Perfect State',
    start: new Date('11/11/21'),
    finish: new Date('11/14/21'),
  },
  {
    title: 'Shadows for Silence in the Forests of Hell ',
    start: new Date('11/14/21'),
    finish: new Date('11/17/21'),
  },
  {
    title: 'The Darkness Outside Us',
    start: new Date('11/17/21'),
    finish: new Date('11/30/21'),
  },
  {
    title: 'Cytonic: Skyward 3',
    start: new Date('12/1/21'),
    finish: new Date('12/15/21'),
  },
  {
    title: 'Defending Elysium: A Cytoverse Novella',
    start: new Date('12/16/21'),
    finish: new Date('12/18/21'),
  },
  {
    title: 'The Dark One',
    start: new Date('12/19/21'),
    finish: new Date('12/23/21'),
  },
  {
    title: 'The Last Wish: Witcher 1',
    start: new Date('12/24/21'),
    finish: new Date('1/6/22'),
  },
  {
    title: 'Evershore: Skyward 3.1',
    start: new Date('1/7/22'),
    finish: new Date('1/8/22'),
  },
  {
    title: 'Sword of Destiny: Witcher 2',
    start: new Date('1/8/22'),
    finish: new Date('1/25/22'),
  },
  {
    title: 'Blood of Elves: Witcher 3',
    start: new Date('1/26/22'),
    finish: new Date('4/13/22'),
  },
  {
    title: 'Time of Contempt: Witcher 4',
    start: new Date('4/14/22'),
    finish: new Date('8/31/22'),
  },
  {
    title: 'The Eye of the World: Wheel of Time 1',
    start: new Date('1/1/22'),
    finish: new Date('1/20/22'),
  },
  {
    title: 'The Great Hunt: Wheel of Time 2',
    start: new Date('1/20/22'),
    finish: new Date('2/20/22'),
  },
  {
    title: 'The Dragon Reborn: Wheel of Time 3',
    start: new Date('2/21/22'),
    finish: new Date('3/12/22'),
  },
  {
    title: 'Shadow Rising: Wheel of Time 4',
    start: new Date('3/13/22'),
    finish: new Date('4/1/22'),
  },
  {
    title: 'Fires of Heaven: Wheel of Time 5',
    start: new Date('4/1/22'),
    finish: new Date('4/20/22'),
  },
  {
    title: 'Lord of Chaos: Wheel of Time 6',
    start: new Date('4/21/22'),
    finish: new Date('5/15/22'),
  },
  {
    title: 'A Crown of Swords: Wheel of Time 7',
    start: new Date('5/15/22'),
    finish: new Date('6/2/22'),
  },
  {
    title: 'Path of Daggers: Wheel of Time 8',
    start: new Date('6/2/22'),
    finish: new Date('6/25/22'),
  },
  {
    title: 'Winter\'s Heart: Wheel of Time 9',
    start: new Date('6/25/22'),
    finish: new Date('7/12/22'),
  },
  {
    title: 'Crossroads of Twilight: Wheel of Time 10',
    start: new Date('7/12/22'),
    finish: new Date('8/1/22'),
  },
  {
    title: 'Knife of Dreams: Wheel of Time 11',
    start: new Date('8/2/22'),
    finish: new Date('9/1/22'),
  },
  {
    title: 'The Gathering Storm: Wheel of Time 12',
    start: new Date('9/1/22'),
    finish: new Date('10/5/22'),
  },
  {
    title: 'Towers of Midnight: Wheel of Time 13',
    start: new Date('10/6/22'),
    finish: new Date('10/28/22'),
  },
  {
    title: 'A Memory of Light: Wheel of Time 14',
    start: new Date('10/29/22'),
    finish: new Date('11/12/22'),
  },
  {
    title: 'New Spring',
    start: new Date('11/13/22'),
    finish: new Date('12/8/22'),
  },
  {
    title: 'The Lost Metal',
    start: new Date('12/9/22'),
    finish: new Date('1/2/23'),
  },
  {
    title: 'Tress of the Emerald Sea',
    start: new Date('1/3/23'),
    finish: new Date('1/16/23'),
  },
  {
    title: 'Leviathan Wakes: Expanse 1',
    start: new Date('1/16/23'),
    finish: new Date('2/4/23'),
  },
  {
    title: 'Caliban\'s War: Expanse 2',
    start: new Date('2/5/23'),
    finish: new Date('2/13/23'),
  },
  {
    title: 'Abaddon\'s Gate: Expanse 3',
    start: new Date('2/13/23'),
    finish: new Date('2/24/23'),
  },
  {
    title: 'Cibola Burn: Expanse 4',
    start: new Date('2/25/23'),
    finish: new Date('3/12/23'),
  },
  {
    title: 'Nemesis Games: Expanse 5',
    start: new Date('3/12/23'),
    finish: new Date('3/25/23'),
  },
  {
    title: 'Babylon\'s Ashes: Expanse 6',
    start: new Date('3/26/23'),
    finish: new Date('4/14/23'),
  },
  {
    title: 'The Frugal Wizard\'s Handbook for Surviving Medieval England ',
    start: new Date('4/15/23'),
    finish: new Date('4/22/23'),
  },
  {
    title: 'Perspolis Rising: Expanse 7',
    start: new Date('4/23/23'),
    finish: new Date('5/5/23'),
  },
  {
    title: 'Tiamat\'s Wrath: Expanse 8',
    start: new Date('5/5/23'),
    finish: new Date('5/17/23'),
  },
  {
    title: 'Leviathan\'s Fall: Expanse 9',
    start: new Date('5/17/23'),
    finish: new Date('5/28/23'),
  },
  {
    title: 'At the Signs of Triumph: Safehold 9',
    start: new Date('5/28/23'),
    finish: new Date('6/27/23'),
  },
  {
    title: 'Through Fiery Trials: Safehold 10',
    start: new Date('6/27/23'),
    finish: new Date('7/17/23'),
  },
  {
    title: 'Yumi and the Nightmare Painter',
    start: new Date('7/17/23'),
    finish: new Date('7/23/23'),
  },
  {
    title: 'The Rithmatist',
    start: new Date('7/23/23'),
    finish: new Date('7/30/23'),
  },
  {
    title: 'Sins of Empire: Gods of Blood and Powder 1',
    start: new Date('7/30/23'),
    finish: new Date('8/13/23'),
  },
  {
    title: 'Wrath of Empire: Gods of Blood and Powder 2',
    start: new Date('8/13/23'),
    finish: new Date('8/27/23'),
  },
  {
    title: 'Blood of Empire: Gods of Blood and Powder 3',
    start: new Date('8/27/23'),
    finish: new Date('9/9/23'),
  },
  {
    title: 'Altered Carbon 1',
    start: new Date('9/10/23'),
    finish: new Date('10/1/23'),
  },
  {
    title: 'The Sunlit Man',
    start: new Date('10/1/23'),
    finish: new Date('10/15/23'),
  },
  {
    title: 'Broken Angels: Altered Carbon 2',
    start: new Date('10/15/23'),
    finish: new Date('10/24/23'),
  },
  {
    title: 'Woken Furies: Altered Carbon 3',
    start: new Date('10/25/23'),
    finish: new Date('11/14/23'),
  },
  {
    title: 'Into The Light: Out of the Dark 2',
    start: new Date('11/15/23'),
    finish: new Date('12/3/23'),
  },
  {
    title: 'Defiant: Skyward 4',
    start: new Date('12/3/23'),
    finish: new Date('12/10/23'),
  },
  {
    title: 'Earth Abides',
    start: new Date('12/10/23'),
    finish: new Date('12/20/23'),
  },
  {
    title: 'The Shadow of the Torturer: Book of the New Sun 1',
    start: new Date('12/21/23'),
    finish: new Date('1/6/24'),
  },
  {
    title: 'The Claw of the Conciliator: Book of the New Sun 2',
    start: new Date('1/10/24'),
    finish: new Date('2/4/24'),
  },
  {
    title: 'The Sword of the Lictor: Book of the New Sun 3',
    start: new Date('2/4/24'),
    finish: new Date('2/19/24'),
  },
  {
    title: 'The Citadel of the Autarch: Book of the New Sun 4',
    start: new Date('3/2/24'),
    finish: new Date('3/23/24'),
  },
  {
    title: 'The Urth of the New Sun: Book of the New Sun 5',
    start: new Date('3/30/24'),
  },
]

export default data;
