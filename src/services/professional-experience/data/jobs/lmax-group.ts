import { WorkData } from '../../types';

const data: WorkData = {
  companyName: 'LMAX Group',
  companyLogo: '/images/logos/lmax_logo.jpg',
  jobTitles: [
    {
      title: 'Senior Software Developer',
      tenure: 'June 2023 - Present',
    },
  ],
  summary: 'A global financial technology company which operates multiple institutional execution venues for electronic ' +
    'foreign exchange (FX) and crypto currency trading.',
  projects: [
    {
      title: 'Continuous Linked Settlement (CLS) for Currency Instruments',
      summary: 'CLS is an industry initiative to eliminate the settlement risk in foreign exchange ' +
        'transactions. By settling trades immediately you reduce risk of to one of the parties ' +
        'defaulting. This project focused on allowing currency instruments to be marked as eligible ' +
        'for CLS if both settlement parties had such a relationship in place. In such cases those ' +
        'trades could be excluded from daily risk calculations, allowing for a trading member to ' +
        'complete a greater number of trades before hitting their risk limit.',
      skillsUsed: [ 'VueJS', 'Java', 'MySQL', ],
    },
    {
      title: 'Market Data Feed Performance Testing',
      summary: 'Increased the performance of market data. Found bottlenecks using profiling and ' +
        'benchmarking of the mark data feed. Used a probe to stream FIX messages to a separate ' +
        'process and used histograms to calculate inter-message timing statistics. Added these ' +
        'latency results to a performance tracker UI to have a real-time view of the effects of ' +
        'code changes on the latency.',
      skillsUsed: [ 'VueJS', 'Java', ],
    },
    {
      title: 'Cryptocurrency Custodian Portal',
      summary: 'Adding features and expanding testing for LMAX\'s cryptocurrency custodian portal. ' +
        'The portal is three interfaces, divided by platform, member, and customer. Each has its own ' +
        'set of features focused toward LMAX\'s operations team, clients, and individual users. Each ' +
        'interface has its own separate api gateway that share a collection of backend services. ',
      skillsUsed: [ 'VueJS', 'Java', 'MySQL', 'gRPC', ],
    },
    {
      title: 'WalletConnect',
      summary: 'WalletConnect is a protocol that enables digital wallets and DApps to connect. Our goal ' +
        'is to allow holders of Pyth on the LMAX Custodian to vote in governance.',
      skillsUsed: [ 'VueJS', 'Java', ],
    },
    {
      title: 'Price Check Venue',
      summary: 'A separate venue within the exchange that is configured for price check (last look) ' +
        'functionality. Makers provide quotes to the execution venue instead of firm pricing. This ' +
        'allows makers to reject matches or execute a trade.',
      skillsUsed: [ 'Java', ],
    },
    {
      title: 'Ethereum Custody',
      summary: 'Adding support for Ethereum custody. Required spinning up an Ethereum node, writing a monitor ' +
        'to watch for contract creation and transactions in tracked addresses. Initially support Eth native and ' +
        'ERC20 tokens.',
      skillsUsed: [ 'Java', 'MySQL', ],
    },
    {
      title: 'Algo Orders - TWAP',
      summary: 'Time Weighted Average Price spreads an order out into a number of smaller orders over a ' +
        'given time period.',
      skillsUsed: [ 'Java', ],
    },
    {
      title: 'Vault Security',
      summary: 'Adding addresses protected by vault level security policies to the cryptocurrency custodian. ' +
        'Give the users the ability to balance funds between cold and vault addresses.',
      skillsUsed: [ 'Java', 'VueJS', 'MySQL', ],
    },
    {
      title: 'Cryptocurrency Wallets',
      summary: 'Adding the concept of a group of address that can re-balance funds between addresses in ' +
        'the group, beholden to security policies.',
      skillsUsed: [ 'Java', 'VueJS', 'MySQL', ],
    },
    {
      title: 'gRPC Interface Code Generation',
      summary: 'Make use of an annotation processor to generate gRPC services and clients for communication ' +
        'between backend services. The goal being to replace .proto files with compile time generation of ' +
        'implementations.',
      skillsUsed: [ 'Java', 'gRPC', ],
    },
    {
      title: 'Warm Security',
      summary: 'Adding addresses protected by warm level security policies to the cryptocurrency custodian. ' +
        'Give the users the ability to balance funds between related (same wallet) addresses.',
      skillsUsed: [ 'Java', 'MySQL', 'VueJS', ],
    },
  ],
};

export default data;
