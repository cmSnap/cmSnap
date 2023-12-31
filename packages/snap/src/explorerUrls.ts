export const explorerUrls: {
  [chainId: string]: string;
} = {
  '1': 'etherscan.io',
  '3': 'ropsten.etherscan.io',
  '4': 'rinkeby.etherscan.io',
  '5': 'goerli.etherscan.io',
  '7': 'exp.thaichain.org',
  '8': 'ubiqscan.io',
  '10': 'optimistic.etherscan.io',
  '14': 'flare-explorer.flare.network',
  '16': 'coston-explorer.flare.network',
  '18': 'explorer-testnet.thundercore.com',
  '19': 'songbird-explorer.flare.network',
  '20': 'esc.elastos.io',
  '21': 'esc-testnet.elastos.io',
  '25': 'explorer.cronos.org',
  '26': 'testnet.genesisl1.org',
  '27': 'exp.shibchain.org',
  '28': 'blockexplorer.rinkeby.boba.network',
  '29': 'explorer.genesisl1.org',
  '30': 'explorer.rsk.co',
  '31': 'explorer.testnet.rsk.co',
  '34': 'explorer.securechain.ai',
  '36': 'dxscan.io',
  '39': 'u2uscan.xyz',
  '40': 'teloscan.io',
  '41': 'testnet.teloscan.io',
  '42': 'explorer.execution.mainnet.lukso.network',
  '43': 'pangolin.subscan.io',
  '44': 'crab.subscan.io',
  '45': 'pangoro.subscan.io',
  '46': 'darwinia.subscan.io',
  '47': 'explorer.acria.ai',
  '48': 'etmscan.network',
  '49': 'pioneer.etmscan.network',
  '50': 'xdcscan.io',
  '51': 'apothem.xinfinscan.com',
  '52': 'www.coinex.net',
  '53': 'testnet.coinex.net',
  '54': 'bellyscan.com',
  '55': 'zyxscan.com',
  '56': 'bscscan.com',
  '57': 'explorer.syscoin.org',
  '58': 'explorer.ont.io',
  '60': 'explorer.gochain.io',
  '69': 'kovan-optimistic.etherscan.io',
  '70': 'www.hooscan.com',
  '71': 'evmtestnet.confluxscan.net',
  '73': 'fncyscan.fncy.world',
  '74': 'explorer.idchain.one',
  '75': 'explorer.decimalchain.com',
  '79': 'scan.zenithchain.co',
  '80': 'scan.genechain.io',
  '81': 'explorer.japanopenchain.org',
  '82': 'scan.meter.io',
  '83': 'scan-warringstakes.meter.io',
  '84': 'explorer.linqto-dev.com',
  '86': 'www.gatescan.org',
  '87': 'explorer.novanetwork.io',
  '90': 'explorer.garizon.com',
  '91': 'explorer.garizon.com',
  '92': 'explorer.garizon.com',
  '93': 'explorer.garizon.com',
  '94': 'explorer.swissdlt.ch',
  '95': 'explorer.camdl.gov.kh',
  '96': 'bkcscan.com',
  '97': 'testnet.bscscan.com',
  '100': 'gnosisscan.io',
  '103': 'scan.worldland.foundation',
  '104': 'kaibascan.io',
  '105': 'explorer-devnet.web3games.org',
  '106': 'evmexplorer.velas.com',
  '107': 'explorer.novanetwork.io',
  '109': 'www.shibariumscan.io',
  '112': 'coinbit-explorer.chain.sbcrypto.app',
  '113': 'explorer.dehvo.com',
  '114': 'coston2-explorer.flare.network',
  '117': 'evm-explorer.uptick.network',
  '119': 'evmscan.nuls.io',
  '120': 'beta.evmscan.nuls.io',
  '121': 'rclscan.com',
  '122': 'explorer.fuse.io',
  '125': 'explorer.testnet.oychain.io',
  '126': 'explorer.oychain.io',
  '128': 'hecoinfo.com',
  '134': 'blockscout.bellecour.iex.ec',
  '135': 'testnet.alyxscan.com',
  '136': 'scan.deamchain.com',
  '137': 'polygonscan.com',
  '138': 'public-0138.defi-oracle.io',
  '139': 'explorer.wikiwoop.com',
  '141': 'testnet.bellyscan.com',
  '144': 'phiscan.com',
  '148': 'explorer.evm.shimmer.network',
  '155': 'testnet.tenetscan.io',
  '156': 'testnet.oescan.io',
  '161': 'testnet.evascan.io',
  '165': 'testnet.explorer.omni.network',
  '167': 'scan.atoverse.info',
  '168': 'explorer.aioz.network',
  '169': 'pacific-explorer.manta.network',
  '180': 'amescan.io',
  '186': 'seeleview.net',
  '188': 'bmc.blockmeta.com',
  '189': 'bmctestnet.blockmeta.com',
  '193': 'cemscan.com',
  '197': 'testnet.neutrinoschain.com',
  '198': 'explorer.bitchain.biz',
  '199': 'bttcscan.com',
  '201': 'testnet.moac.io',
  '204': 'mainnet.opbnbscan.com',
  '206': 'testnet.vinuscan.com',
  '207': 'vinuscan.com',
  '210': 'btnscan.com',
  '212': 'testnet.mapscan.io',
  '214': 'shinascan.shinarium.org',
  '217': 'scan.siriusnet.io',
  '225': 'scan.lachain.io',
  '226': 'scan-test.lachain.io',
  '230': 'evm.swapdex.network',
  '236': 'testnet-scan.deamchain.com',
  '242': 'www.plgscan.com',
  '246': 'explorer.energyweb.org',
  '248': 'explorer.oasys.games',
  '250': 'ftmscan.com',
  '255': 'blockscout.kroma.network',
  '259': 'scan.neonlink.io',
  '262': 'explorer.surnet.org',
  '269': 'hscan.org',
  '271': 'egonscan.com',
  '274': 'explorer.lachain.network',
  '280': 'goerli.explorer.zksync.io',
  '288': 'bobascan.com',
  '291': 'explorer.orderly.network',
  '301': 'blockexplorer.bobaopera.boba.network',
  '303': 'testnet.ncnscan.com',
  '311': 'omaxray.com',
  '313': 'ncnscan.com',
  '322': 'scan-testnet.kcc.network',
  '324': 'explorer.zksync.io',
  '333': 'explorer.mainnet.web3q.io',
  '335': 'explorer-test.dfkchain.com',
  '336': 'shiden.subscan.io',
  '345': 'explorer.yooldo-verse.xyz',
  '361': 'explorer.thetatoken.org',
  '363': 'guardian-testnet-sapphire-explorer.thetatoken.org',
  '364': 'guardian-testnet-amber-explorer.thetatoken.org',
  '365': 'testnet-explorer.thetatoken.org',
  '369': 'scan.pulsechain.com',
  '371': 'explorer-testnet.theconsta.com',
  '399': 'scan.nativ3.network',
  '400': 'testnet.hyperonchain.com',
  '401': 'testnet.ozonescan.io',
  '411': 'explorer.pepe-chain.vip',
  '416': 'explorer.sx.technology',
  '418': 'testexplorer.lachain.network',
  '420': 'optimism-goerli.blockscout.com',
  '424': 'explorer.publicgoods.network',
  '427': 'explorer.zeeth.io',
  '428': 'explorer.verse.gesoten.com',
  '443': 'testnet.obscuroscan.io',
  '444': 'sepolia.synapsescan.com',
  '456': 'scan.arzio.co',
  '462': 'areonscan.com',
  '512': 'scan.acuteangle.com',
  '513': 'scan-testnet.acuteangle.com',
  '520': 'xscscan.pub',
  '530': 'fx-evm.functionx.io',
  '534': 'candleexplorer.com',
  '542': 'pawscan.io',
  '555': 'exp.velaverse.io',
  '568': 'explorer-testnet.dogechain.dog',
  '570': 'explorer.rollux.com',
  '588': 'stardust-explorer.metis.io',
  '592': 'astar.subscan.io',
  '595': 'blockscout.mandala.aca-staging.network',
  '596': 'blockscout.karura-testnet.aca-staging.network',
  '597': 'blockscout.acala-dev.aca-dev.network',
  '599': 'goerli.explorer.metisdevops.link',
  '601': 'testnet.peer.inc',
  '614': 'explorer.graphlinq.io',
  '634': 'avoscan.co',
  '647': 'explorer.toronto.sx.technology',
  '648': 'explorer.endurance.fusionist.io',
  '667': 'arrakis.gorengine.com',
  '668': 'scan.juncachain.com',
  '669': 'scan-testnet.juncachain.com',
  '686': 'blockscout.karura.network',
  '700': 'avastar.info',
  '707': 'explorer.bcsdev.io',
  '708': 'testnet.bcsdev.io',
  '710': 'explorer.furya.io',
  '719': 'puppyscan.shib.io',
  '721': 'explorer.lycanchain.com',
  '740': 'testnet-explorer.canto.neobase.one',
  '741': 'testnet.ventionscan.io',
  '742': 'explorer.script.tv',
  '766': 'mainnet.qom.one',
  '776': 'testnet.openchain.info',
  '786': 'maalscan.io',
  '787': 'blockscout.acala.network',
  '788': 'testnet.aeroscan.id',
  '789': 'patexscan.io',
  '800': 'explorer.lucidcoin.io',
  '813': 'qng.meerscan.io',
  '818': 'beonescan.com',
  '841': 'explorer.mainnet.taraxa.io',
  '842': 'explorer.testnet.taraxa.io',
  '859': 'explorer.dev.zeeth.io',
  '868': 'explorer.fantasiachain.com',
  '876': 'explorer.main.oasvrs.bnken.net',
  '877': 'dxtscan.com',
  '880': 'ambrosscan.com',
  '900': 'explorer-testnet.garizon.com',
  '901': 'explorer-testnet.garizon.com',
  '902': 'explorer-testnet.garizon.com',
  '903': 'explorer-testnet.garizon.com',
  '919': 'sepolia.explorer.mode.network',
  '927': 'yidarkscan.com',
  '943': 'scan.v4.testnet.pulsechain.com',
  '963': 'scan.bitcoincode.technology',
  '980': 'www.topscan.io',
  '985': 'scan.metamemo.one:8080',
  '989': 'www.topscan.io',
  '990': 'explorer.eliberty.ngo',
  '997': 'explorer.5ire.network',
  '998': 'explorer.luckynetwork.org',
  '1000': 'explorer.gton.network',
  '1001': 'scope.klaytn.com',
  '1003': 'explorer.tectum.io',
  '1004': 'test.ektascan.io',
  '1008': 'explorer.eurus.network',
  '1028': 'testscan.bittorrentchain.io',
  '1030': 'evm.confluxscan.net',
  '1038': 'tbroscan.bronos.org',
  '1039': 'broscan.bronos.org',
  '1071': 'explorer.evm.testnet.shimmer.network',
  '1072': 'explorer.evm.testnet.shimmer.network',
  '1073': 'explorer.evm.testnet.shimmer.network',
  '1088': 'andromeda-explorer.metis.io',
  '1089': 'humans.explorers.guru',
  '1099': 'explorer.moac.io',
  '1101': 'zkevm.polygonscan.com',
  '1107': 'explorer.blx.org',
  '1108': 'explorer.blxq.org',
  '1111': 'explorer.wemix.com',
  '1112': 'microscope.test.wemix.com',
  '1115': 'scan.test.btcs.network',
  '1116': 'scan.coredao.org',
  '1117': 'explorer.dogcoin.network',
  '1133': 'meta.defiscan.live',
  '1138': 'testnet.amstarscan.com',
  '1149': 'explorer.plexfinance.us',
  '1170': 'evm-explorer.origin.uptick.network',
  '1177': 's2.tl.web.tr:4000',
  '1197': 'explorer.iorachain.com',
  '1202': 'explorer.cadaut.com',
  '1213': 'explorer.popcateum.org',
  '1214': 'explorer.entercoin.net',
  '1229': 'exzoscan.io',
  '1230': 'explorer.ultron-dev.io',
  '1231': 'ulxscan.com',
  '1234': 'stepscan.io',
  '1243': 'app.archiescan.io',
  '1244': 'testnet.archiescan.io',
  '1246': 'omscan.omplatform.com',
  '1252': 'testnet.cicscan.com',
  '1280': 'browser.halo.land',
  '1284': 'moonbeam.moonscan.io',
  '1285': 'moonriver.moonscan.io',
  '1287': 'moonbase.moonscan.io',
  '1291': 'explorer-evm.testnet.swisstronik.com',
  '1294': 'blockexplorer.bobabeam.boba.network',
  '1297': 'blockexplorer.bobabase.boba.network',
  '1311': 'test.doscan.io',
  '1314': 'www.alyxscan.com',
  '1319': 'aiascan.com',
  '1320': 'testnet.aiascan.com',
  '1338': 'elysium-explorer.vulcanforged.com',
  '1339': 'explorer.elysiumchain.tech',
  '1353': 'cicscan.com',
  '1369': 'explorer.zakumi.io',
  '1379': 'explorer.kalarchain.tech',
  '1388': 'mainnet.amstarscan.com',
  '1392': 'www.blockexplorer.com',
  '1402': 'explorer.public.zkevm-test.net',
  '1422': 'explorer.public.zkevm-test.net',
  '1433': 'rikscan.com',
  '1442': 'explorer.public.zkevm-test.net',
  '1452': 'explorer.giltestnet.com',
  '1455': 'ctexscan.com',
  '1501': 'scan.bevm.io',
  '1506': 'evm.sherpax.io',
  '1507': 'evm-pre.sherpax.io',
  '1515': 'eth.beagle.chat',
  '1559': 'tenetscan.io',
  '1662': 'mainnet.liquichain.io',
  '1663': 'gobi-explorer.horizen.io',
  '1701': 'explorer.anytype.io',
  '1707': 'exp.blockchain.or.th',
  '1708': 'exp.testnet.blockchain.or.th',
  '1718': 'palettescan.com',
  '1773': 'partyexplorer.co',
  '1777': 'explorer.gaussgang.com',
  '1807': 'rabbit.analogscan.com',
  '1818': 'cubescan.network',
  '1819': 'testnet.cubescan.network',
  '1875': 'explorer.whitebit.network',
  '1881': 'scan.cartenz.works',
  '1890': 'phoenix.lightlink.io',
  '1891': 'pegasus.lightlink.io',
  '1898': 'explorer.boyanet.org:4001',
  '1904': 'explorer.sportschainnetwork.xyz',
  '1907': 'bitciexplorer.com',
  '1908': 'testnet.bitciexplorer.com',
  '1909': 'merklescan.com',
  '1945': 'explorer-testnet.onuschain.io',
  '1954': 'exp.dexilla.com',
  '1969': 'testnetscan.scschain.com',
  '1970': 'scan.scschain.com',
  '1975': 'explorer.onuschain.io',
  '1984': 'testnetexplorer.eurus.network',
  '1994': 'ektascan.io',
  '1995': 'explorer.testnet.edexa.com',
  '2000': 'explorer.dogechain.dog',
  '2001': 'explorer-mainnet-cardano-evm.c1.milkomeda.com',
  '2002': 'explorer-mainnet-algorand-rollup.a1.milkomeda.com',
  '2008': 'explorer.testnet.cloudwalk.io',
  '2009': 'explorer.mainnet.cloudwalk.io',
  '2016': 'explorer.mainnetz.io',
  '2018': 'explorer.dev.publicmint.io',
  '2019': 'explorer.tst.publicmint.io',
  '2020': 'explorer.publicmint.io',
  '2021': 'edgscan.live',
  '2022': 'testnet.edgscan.live',
  '2023': 'evmscan-test.hupayx.io',
  '2025': 'scan.rangersprotocol.com',
  '2031': 'centrifuge.subscan.io',
  '2047': 'web3-explorer-mesos.thestratos.org',
  '2048': 'web3-explorer.thestratos.org',
  '2049': 'movoscan.com',
  '2077': 'explorer.qkacoin.org',
  '2100': 'scan.ecoball.org',
  '2101': 'espuma-scan.ecoball.org',
  '2109': 'explorer.exosama.com',
  '2122': 'scan.metaplayer.one',
  '2124': 'dubai.mp1scan.io',
  '2138': 'public-2138.defi-oracle.io',
  '2151': 'boascan.io',
  '2152': 'evm.findorascan.io',
  '2153': 'testnet-anvil.evm.findorascan.io',
  '2154': 'testnet-forge.evm.findorascan.io',
  '2199': 'explorer.moonsama.com',
  '2202': 'antofyscan.com',
  '2203': 'explorer.bitcoinevm.com',
  '2213': 'explorer.evanesco.org',
  '2222': 'kavascan.com',
  '2223': 'scan.vcex.xyz',
  '2300': 'bombscan.com',
  '2323': 'testnet.somascan.io',
  '2332': 'somascan.io',
  '2357': 'blockscout.sepolia-deprecated.kroma.network',
  '2358': 'blockscout.sepolia.kroma.network',
  '2399': 'explorer.bombchain-testnet.ankr.com',
  '2400': 'explorer.tcgverse.xyz',
  '2415': 'explorer.xo-dex.com',
  '2484': 'testnet.u2uscan.xyz',
  '2569': 'tpcscan.com',
  '2611': 'redlightscan.finance',
  '2612': 'cchain-explorer.ezchain.com',
  '2613': 'testnet-cchain-explorer.ezchain.com',
  '2710': 'explorer-testnet.morphism.xyz',
  '2718': 'blockscout.klaos.laosfoundation.io',
  '2888': 'testnet.bobascan.com',
  '2999': 'mainnet.bityuan.com',
  '3003': 'explorer.canxium.org',
  '3011': '3011.routescan.io',
  '3031': 'orlscan.com',
  '3068': 'explorer.mainnet.thebifrost.io',
  '3306': 'explorer.debounce.network',
  '3333': 'explorer.testnet.web3q.io',
  '3334': 'explorer.galileo.web3q.io',
  '3400': 'explorer.paribu.network',
  '3434': 'testnet.securechain.ai',
  '3500': 'testnet.paribuscan.com',
  '3501': 'exp.jfinchain.com',
  '3601': 'explorer.pandoproject.org',
  '3602': 'testnet.explorer.pandoproject.org',
  '3637': 'btxtestchain.com',
  '3639': 'ichainscan.com',
  '3666': 'jscan.jnsdao.com',
  '3690': 'bittexscan.com',
  '3693': 'explorer.empirenetwork.io',
  '3698': 'testnet.senjepowersscan.com',
  '3699': 'senjepowersscan.com',
  '3701': 'explorer.xpla.io',
  '3737': 'scan.crossbell.io',
  '3797': 'alveyscan.com',
  '3888': 'kalyscan.io',
  '3889': 'testnet.kalyscan.io',
  '3912': 'www.dracscan.io',
  '3939': 'test.doscan.io',
  '3966': 'dynoscan.io',
  '3967': 'testnet.dynoscan.io',
  '3999': 'mainnet.yuan.org',
  '4000': 'ozonescan.io',
  '4001': 'scan-testnet.peperium.io',
  '4002': 'testnet.ftmscan.com',
  '4003': 'explorer.x1-fastnet.xen.network',
  '4051': 'blockexplorer.testnet.bobaopera.boba.network',
  '4062': 'explorer.testnet.n3.nahmii.io',
  '4090': 'oasis.ftnscan.com',
  '4096': 'testnet.bitindiscan.com',
  '4099': 'bitindiscan.com',
  '4102': 'testnet.explorer.aioz.network',
  '4141': 'testnet.tipboxcoin.net',
  '4181': 'explorer.phi.network',
  '4201': 'explorer.execution.testnet.lukso.network',
  '4242': 'www.nexiscan.com',
  '4328': 'blockexplorer.testnet.avax.boba.network',
  '4400': 'scan.creditsmartchain.com',
  '4444': 'explorer.htmlcoin.com',
  '4460': 'explorerl2new-orderly-l2-4460-sepolia-8tc3sd7dvy.t.conduit.xyz',
  '4689': 'iotexscan.io',
  '4690': 'testnet.iotexscan.io',
  '4759': 'testnet.meversescan.io',
  '4777': 'testnet-explorer.blackfort.network',
  '4893': 'gcscan.io',
  '4918': 'evm-testnet.venidiumexplorer.com',
  '4919': 'evm.venidiumexplorer.com',
  '4999': 'explorer.blackfort.network',
  '5000': 'explorer.mantle.xyz',
  '5001': 'explorer.testnet.mantle.xyz',
  '5002': 'evmexplorer.treasurenet.io',
  '5003': 'explorer.sepolia.mantle.xyz',
  '5005': 'evmexplorer.testnet.treasurenet.io',
  '5165': 'ftnscan.com',
  '5177': 'explorer.tlchain.network',
  '5234': 'humanode.subscan.io',
  '5353': 'testnet.tritanium.network',
  '5551': 'explorer.nahmii.io',
  '5553': 'explorer.testnet.nahmii.io',
  '5555': 'explorer.chainverse.info',
  '5611': 'opbnb-testnet.bscscan.com',
  '5700': 'tanenbaum.io',
  '5729': 'scan-testnet.hika.network',
  '5758': 'testnet.satoshiscan.io',
  '5869': 'scan2.wegochain.io',
  '6065': 'explorer-test.tresleches.finance',
  '6066': 'explorer.tresleches.finance',
  '6102': 'explorer.cascadia.foundation',
  '6118': 'testnet.explorer.uptn.io',
  '6119': 'explorer.uptn.io',
  '6552': 'testnet-explorer.scolcoin.com',
  '6565': 'testnet.foxscan.app',
  '6626': 'scan.chain.pixie.xyz',
  '6688': 'irishub.iobscan.io',
  '6789': 'mainnet.goldsmartchain.com',
  '6969': 'tombscout.com',
  '7000': 'explorer.mainnet.zetachain.com',
  '7001': 'athens3.explorer.zetachain.com',
  '7027': 'ella.network',
  '7070': 'evm.planq.network',
  '7171': 'explorer.bit-rock.io',
  '7332': 'eon-explorer.horizenlabs.io',
  '7341': 'bx.shyft.network',
  '7518': 'www.meversescan.io',
  '7575': 'testnet.adilchain-scan.io',
  '7576': 'adilchain-scan.io',
  '7668': 'explorer.rootnet.live',
  '7672': 'explorer.rootnet.cloud',
  '7700': 'evm.explorer.canto.io',
  '7701': 'testnet.tuber.build',
  '7771': 'testnetscan.bit-rock.io',
  '7860': 'testnet.maalscan.io',
  '7878': 'explorer.hazlor.com',
  '7895': 'testnet.ardscan.com',
  '7979': 'doscan.io',
  '8000': 'evm-explorer.teleport.network',
  '8001': 'evm-explorer.testnet.teleport.network',
  '8080': 'explorer-liberty10.shardeum.org',
  '8081': 'explorer-liberty20.shardeum.org',
  '8082': 'explorer-sphinx.shardeum.org',
  '8131': 'qng-testnet.meerscan.io',
  '8181': 'testnet.beonescan.com',
  '8192': 'toruscan.com',
  '8194': 'testnet.toruscan.com',
  '8217': 'scope.klaytn.com',
  '8272': 'blocktonscan.com',
  '8453': 'basescan.org',
  '8668': 'mainnet-blockexplorer.helachain.com',
  '8723': 'www.olo.network',
  '8738': 'explorer.alph.network',
  '8888': 'xanachain.xana.net',
  '8898': 'mmtscan.io',
  '8899': 'exp-l1.jibchain.net',
  '8989': 'scan.gmmtchain.io',
  '9000': 'testnet.escan.live',
  '9001': 'escan.live',
  '9012': 'explorer.berylbit.io',
  '9223': 'explorer.codefin.pro',
  '9339': 'testnet.dogcoin.network',
  '9527': 'robin-rangersscan.rangersprotocol.com',
  '9528': 'www.qeasyweb3.com',
  '9559': 'testnet-scan.neonlink.io',
  '9728': 'blockexplorer.testnet.bnb.boba.network',
  '9768': 'testnet.mainnetz.io',
  '9779': 'explorer.pepenetwork.io',
  '9818': 'network.impscan.com',
  '9819': 'impscan.com',
  '9977': 'testnet.mindscan.info',
  '9996': 'mainnet.mindscan.info',
  '9997': 'testnet-rollup-explorer.altlayer.io',
  '10024': 'gonscan.com',
  '10081': 'explorer.testnet.japanopenchain.org',
  '10200': 'blockscout.chiadochain.net',
  '10201': 'explorer.maxxchain.org',
  '10243': 'explorer-test.arthera.net',
  '10248': 'www.0xtscan.com',
  '10395': 'testscan.worldland.foundation',
  '10507': 'mainnet.num.network',
  '10508': 'testnet.num.network',
  '10823': 'cryptocoinpay.info',
  '10946': 'explorer.quadrans.io',
  '10947': 'explorer.testnet.quadrans.io',
  '11110': 'explorer.astranaut.io',
  '11115': 'explorer.astranaut.dev',
  '11119': 'explorer.hashbit.org',
  '11235': 'explorer.haqq.network',
  '11437': 'bx.testnet.shyft.network',
  '11612': 'testnet.sardisnetwork.com',
  '11888': 'sanrchain-explorer.santiment.net',
  '11891': 'polygonsupernet.explorer.arianee.net',
  '12009': 'satoshiscan.io',
  '12051': 'betaenv.singularity.gold:18002',
  '12052': 'zeroscan.singularity.gold',
  '12123': 'scan.brcchain.io',
  '12306': 'scan.fibochain.org',
  '12345': 'testnet.stepscan.io',
  '12715': 'testnet.rikscan.com',
  '12890': 'testnet.quantumscan.org',
  '13308': 'scan.creditsmartchain.com',
  '13381': 'phoenixplorer.com',
  '13473': 'explorer.testnet.immutable.com',
  '14000': 'explorer.3sps.net',
  '15003': 'explorer.dev.immutable.com',
  '15555': 'trustscan.one',
  '15557': 'explorer.testnet.evm.eosnetwork.com',
  '16507': 'gchainexplorer.genesys.network',
  '16688': 'nyancat.iobscan.io',
  '16888': 'testnet.ivarscan.com',
  '17000': 'holesky.beaconcha.in',
  '17001': 'explorer.holesky.redstone.xyz',
  '17171': 'mainnet.oneg8.network',
  '17180': 'testnet.palettescan.com',
  '17777': 'explorer.evm.eosnetwork.com',
  '18000': 'explorer.fod.games',
  '18122': 'stnscan.com',
  '18159': 'memescan.io',
  '18181': 'testnet.oneg8.network',
  '18686': 'explorer.mxc.com',
  '19011': 'explorer.oasys.homeverse.games',
  '19845': 'btcixscan.com',
  '20001': 'scan.camelark.com',
  '20736': 'explorer.p12.games',
  '21337': 'uncoverexplorer.com',
  '21816': 'explorer.omchain.io',
  '22023': 'taycan-evmscan.hupayx.io',
  '22222': 'nautscan.com',
  '22776': 'mapscan.io',
  '23006': 'test.antofyscan.com',
  '23118': 'opside.info',
  '23294': 'explorer.sapphire.oasis.io',
  '23295': 'testnet.explorer.sapphire.oasis.dev',
  '25888': 'www.hammerchain.io',
  '25925': 'testnet.bkcscan.com',
  '26600': 'hertzscan.com',
  '26863': 'scan.oasischain.io',
  '29548': 'explorer.oasys.mycryptoheroes.net',
  '30067': 'testnet-scan.piecenetwork.com',
  '30103': 'cerium-explorer.canxium.net',
  '31223': 'scan.cloudtx.finance',
  '31224': 'explorer.cloudtx.finance',
  '31337': 'testnet-explorer.gochain.io',
  '32520': 'brisescan.com',
  '32659': 'fsnscan.com',
  '32769': 'evmx.zilliqa.com',
  '33101': 'evmx.zilliqa.com',
  '33333': 'avescan.io',
  '33385': 'otterscan.devnet.zilliqa.com',
  '33469': 'explorer.zq2-devnet.zilstg.dev',
  '34443': 'explorer.mode.network',
  '35011': 'exp.j2o.io',
  '35441': 'explorer.q.org',
  '35443': 'explorer.qtestnet.org',
  '38400': 'scan.rangersprotocol.com',
  '38401': 'robin-rangersscan.rangersprotocol.com',
  '39815': 'ohoscan.com',
  '41500': 'explorer.opulent-x.com',
  '42161': 'arbiscan.io',
  '42170': 'nova-explorer.arbitrum.io',
  '42220': 'celoscan.io',
  '42261': 'testnet.explorer.emerald.oasis.dev',
  '42262': 'explorer.emerald.oasis.dev',
  '42801': 'explorer.testnet.verse.gesoten.com',
  '43113': 'testnet.snowtrace.io',
  '43114': 'snowtrace.io',
  '43288': 'blockexplorer.avax.boba.network',
  '44444': 'frenscan.io',
  '44787': 'alfajores.celoscan.io',
  '45000': 'explorer.autobahn.network',
  '46688': 'testnet.fsnscan.com',
  '47805': 'scan.rei.network',
  '49049': 'floripa-explorer.wireshape.org',
  '49088': 'explorer.testnet.thebifrost.io',
  '50021': 'explorer.testnet.gton.network',
  '51178': 'lumoz.info',
  '51712': 'contract-mainnet.sardisnetwork.com',
  '52014': 'blockexplorer.electroneum.com',
  '53935': 'explorer.dfkchain.com',
  '54211': 'explorer.testedge2.haqq.network',
  '54321': 'testnet.toronet.org',
  '55004': 'explorer.titan.tokamak.network',
  '55555': 'reiscan.com',
  '55556': 'testnet.reiscan.com',
  '56288': 'blockexplorer.bnb.boba.network',
  '56789': 'novascan.velo.org',
  '57000': 'rollux.tanenbaum.io',
  '58008': 'explorer.sepolia.publicgoods.network',
  '59140': 'goerli.lineascan.build',
  '59144': 'lineascan.build',
  '60000': 'test0.thinkiumscan.net',
  '60001': 'test1.thinkiumscan.net',
  '60002': 'test2.thinkiumscan.net',
  '60103': 'test103.thinkiumscan.net',
  '61800': 'devexplorer2.viacube.com',
  '61803': 'eticascan.org',
  '61916': 'explore.doken.dev',
  '62621': 'e.mtv.ac',
  '63000': 'explorer.ecredits.com',
  '63001': 'explorer.tst.ecredits.com',
  '65450': 'explorer.scolcoin.com',
  '66988': 'beta.scan.janusnetwork.io',
  '67390': 'siriusnet.tryethernal.com',
  '68770': 'explorer.dm2verse.dmm.com',
  '69420': 'explorer.condrieu.ethdevops.io',
  '70000': 'chain0.thinkiumscan.net',
  '70001': 'chain1.thinkiumscan.net',
  '70002': 'chain2.thinkiumscan.net',
  '70103': 'chain103.thinkiumscan.net',
  '71401': 'v1.testnet.gwscan.com',
  '71402': 'v1.gwscan.com',
  '73927': 'scan.mvm.dev',
  '75000': 'explorer.resincoin.dev',
  '77238': 'testnet-explorer.foundryscan.org',
  '77612': 'ventionscan.io',
  '78281': 'blockscout.dragonfly.hexapod.network',
  '79879': 'testnet.goldsmartchain.com',
  '80001': 'mumbai.polygonscan.com',
  '81041': 'nordekscan.com',
  '81720': 'quantumscan.org',
  '84531': 'goerli.basescan.org',
  '84532': 'base-sepolia.blockscout.com',
  '84886': 'explorer.aerielab.io',
  '88002': 'proteus.nautscan.com',
  '88880': 'scoville-explorer.chiliz.com',
  '88888': 'ivarscan.com',
  '90210': 'explorer.beverlyhills.ethdevops.io',
  '91002': 'triton.nautscan.com',
  '92001': 'explorer.lambda.top',
  '96970': 'blockscout.mantis.hexapod.network',
  '97288': 'blockexplorer.bnb.boba.network',
  '99099': 'testnet.eliberty.ngo',
  '100009': 'vechainstats.com',
  '100010': 'explore-testnet.vechain.org',
  '101010': 'testnet.soverun.com',
  '103090': 'scan.crystaleum.org',
  '108801': 'explorer.brochain.org',
  '111000': 'explorer.test.siberium.net',
  '111111': 'explorer.main.siberium.net',
  '112358': 'explorer.metachain.one',
  '123456': 'devnet.adilchain-scan.io',
  '131419': 'scan.etnd.pro',
  '167004': 'explorer.a2.taiko.xyz',
  '167005': 'explorer.test.taiko.xyz',
  '167006': 'explorer.l3test.taiko.xyz',
  '167007': 'explorer.jolnir.taiko.xyz',
  '188710': 'biticablockchain.com',
  '188881': 'explorer.condor.systems',
  '200101': 'explorer-devnet-cardano-evm.c1.milkomeda.com',
  '200202': 'explorer-devnet-algorand-rollup.a1.milkomeda.com',
  '201018': 'scan.alaya.network',
  '201030': 'devnetscan.alaya.network',
  '201804': 'explorer.mythicalgames.com',
  '202020': 'testnet.explorer.decimalchain.com',
  '202212': 'explorer.x1-devnet.xen.network',
  '202624': 'jellie.twala.io',
  '204005': 'explorer.x1-testnet.xen.network',
  '210425': 'scan.platon.network',
  '220315': 'explorer.masnet.ai',
  '221230': 'dashboard.reapchain.org',
  '221231': 'test-dashboard.reapchain.org',
  '224168': 'ecoscan.tafchain.com',
  '230315': 'testnet.hashkeyscan.io',
  '247253': 'explorer-testnet.saakuru.network',
  '256256': 'mainnet.scan.caduceus.foundation',
  '271271': 'testnet.egonscan.com',
  '314159': 'calibration.filscan.io',
  '330844': 'tscscan.com',
  '333331': 'testnet.avescoin.io',
  '333333': 'scantest.nativ3.network',
  '333666': 'testnet.oonescan.com',
  '333777': 'dev.oonescan.com',
  '355113': 'explorer.bitfinity.network',
  '373737': 'blockscout-test.hap.land',
  '381931': 'metalscan.io',
  '381932': 'tahoe.metalscan.io',
  '404040': 'tipboxcoin.net',
  '420420': 'mainnet-explorer.kekchain.com',
  '420666': 'testnet-explorer.kekchain.com',
  '420692': 'l2-testnet.altscan.org',
  '421611': 'testnet.arbiscan.io',
  '421613': 'goerli.arbiscan.io',
  '421614': 'sepolia-explorer.arbitrum.io',
  '424242': 'testnet.ftnscan.com',
  '512512': 'galaxy.scan.caduceus.foundation',
  '534351': 'sepolia.scrollscan.com',
  '534352': 'scrollscan.com',
  '534353': 'alpha-blockscout.scroll.io',
  '534849': 'shinascan.shinarium.org',
  '535037': 'Bescscan.io',
  '622277': 'explorer.rethereum.org',
  '641230': 'brnkscan.bearnetwork.net',
  '651940': 'alltra.global',
  '666888': 'testnet-blockexplorer.helachain.com',
  '751230': 'brnktest-scan.bearnetwork.net',
  '761412': 'miexs.com',
  '800001': 'explorer.octa.space',
  '827431': 'curvescan.io',
  '888888': 'www.visionscan.org',
  '900000': 'explorer.posichain.org',
  '910000': 'explorer-testnet.posichain.org',
  '920000': 'explorer-devnet.posichain.org',
  '920001': 'explorer-devnet.posichain.org',
  '923018': 'fncyscan-testnet.fncy.world',
  '955305': 'explorer.eluv.io',
  '988207': 'ecroxscan.com',
  '1261120': 'zkatana.blockscout.com',
  '1313114': 'explorer.ethoprotocol.com',
  '1337702': 'explorer.kintsugi.themerge.dev',
  '1337802': 'explorer.kiln.themerge.dev',
  '1337803': 'zhejiang.beaconcha.in',
  '2021398': 'explorer.testnet.debank.com',
  '2203181': 'devnetscan.platon.network',
  '2206132': 'devnet2scan.platon.network',
  '3441005': 'manta-testnet.calderaexplorer.xyz',
  '4000003': 'zero-explorer.alt.technology',
  '5167003': 'wannsee-explorer.mxc.com',
  '5201420': 'blockexplorer.thesecurityteam.rocks',
  '5555555': 'txe.imversed.network',
  '5555558': 'txe-test.imversed.network',
  '7225878': 'explorer.saakuru.network',
  '7355310': 'mainnet-explorer.openvessel.io',
  '7668378': 'testnet.qom.one',
  '7777777': 'explorer.zora.energy',
  '8794598': 'blockscout.hap.land',
  '9322252': 'xcap-mainnet.explorer.xcap.network',
  '9322253': 'xcap-milvine.explorer.xcap.network',
  '10101010': 'explorer.soverun.com',
  '11155111': 'sepolia.etherscan.io',
  '14288640': 'explorer.anduschain.io',
  '20180430': 'spectrum.pub',
  '20181205': 'qkiscan.io',
  '20201022': 'scan.pego.network',
  '22052002': 'explorer.excelon.io',
  '27082017': 'testnet-explorer.exlscan.com',
  '27082022': 'exlscan.com',
  '29032022': 'explorer.flaexchange.top',
  '65010000': 'bakerloo.autonity.org',
  '65100000': 'piccadilly.autonity.org',
  '68840142': 'explorer.testnet.frame.xyz',
  '88888888': 'teamblockchain.team',
  '192837465': 'explorer.gather.network',
  '245022926': 'devnet.explorer.neon-labs.org',
  '245022934': 'neonscan.org',
  '245022940': 'testnet.explorer.neon-labs.org',
  '278611351': 'turbulent-unique-scheat.explorer.mainnet.skalenodes.com',
  '311752642': 'mainnet-explorer.oneledger.network',
  '344106930': 'staging-utter-unripe-menkar.explorer.staging-v3.skalenodes.com',
  '356256156': 'testnet-explorer.gather.network',
  '476158412': 'staging-legal-crazy-castor.explorer.staging-v3.skalenodes.com',
  '486217935': 'devnet-explorer.gather.network',
  '503129905': 'staging-faint-slimy-achird.explorer.staging-v3.skalenodes.com',
  '999999999': 'sepolia.explorer.zora.energy',
  '1273227453': 'wan-red-ain.explorer.mainnet.skalenodes.com',
  '1313161554': 'aurorascan.dev',
  '1313161555': 'testnet.aurorascan.dev',
  '1350216234': 'parallel-stormy-spica.explorer.mainnet.skalenodes.com',
  '1351057110':
    'staging-fast-active-bellatrix.explorer.staging-v3.skalenodes.com',
  '1380996178': 'explorer.raptorchain.io',
  '1482601649': 'green-giddy-denebola.explorer.mainnet.skalenodes.com',
  '1517929550':
    'staging-aware-chief-gianfar.explorer.staging-v3.skalenodes.com',
  '1564830818': 'honorable-steel-rasalhague.explorer.mainnet.skalenodes.com',
  '1666600000': 'explorer.harmony.one',
  '1666700000': 'explorer.testnet.harmony.one',
  '1666700001': 'explorer.testnet.harmony.one',
  '2046399126': 'elated-tan-skat.explorer.mainnet.skalenodes.com',
  '2863311531': 'testnet.a8scan.io',
  '4216137055': 'frankenstein-explorer.oneledger.network',
  '11297108099': 'explorer.palm-uat.xyz',
  '11297108109': 'explorer.palm.io',
  '111222333444': 'scan.alphabetnetwork.org',
  '197710212030': 'blockscout.ntity.io',
  '197710212031': 'blockscout.haradev.com',
  '383414847825': 'smart.zeniq.net',
  '666301171999': 'scan.ipdc.io',
  '868455272153094': 'v1.aggron.gwscan.com',
};
