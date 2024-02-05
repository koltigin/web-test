---
sidebar_position: 7
---

# Tablar

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Polygon">
  
```
rm /root/.forta/config.yml
sudo tee /root/.forta/config.yml > /dev/null <<EOF
chainId: 137

scan:
  jsonRpc:
    url: ALCHEMY_LINK

trace:
  enabled: false
EOF
```
</TabItem>
<TabItem value="BSC">
  
```
rm /root/.forta/config.yml
sudo tee /root/.forta/config.yml > /dev/null <<EOF
chainId: 56

scan:
  jsonRpc:
    url: ALCHEMY_LINK

trace:
  enabled: false
EOF
```
</TabItem>
<TabItem value="Ethereum">
  
``` 
rm /root/.forta/config.yml
sudo tee /root/.forta/config.yml > /dev/null <<EOF
chainId: 1

scan:
  jsonRpc:
    url: ALCHEMY_LINK

trace:
  enabled: false
EOF
```

</TabItem>
<TabItem value="Arbitrum">
  
```
rm /root/.forta/config.yml
sudo tee /root/.forta/config.yml > /dev/null <<EOF
chainId: 42161

scan:
  jsonRpc:
    url: ALCHEMY_LINK

trace:
  enabled: false
EOF
```

</TabItem>
<TabItem value="Optimism">
  
``` 
rm /root/.forta/config.yml
sudo tee /root/.forta/config.yml > /dev/null <<EOF
chainId: 10

scan:
  jsonRpc:
    url: ALCHEMY_LINK

trace:
  enabled: false
EOF
```

</TabItem>
<TabItem value="Avalanche">
  
``` 
rm /root/.forta/config.yml
sudo tee /root/.forta/config.yml > /dev/null <<EOF
chainId: 43114

scan:
  jsonRpc:
    url: ALCHEMY_LINK

trace:
  enabled: false
EOF
```

</TabItem>
<TabItem value="Fantom">
  
``` 
rm /root/.forta/config.yml
sudo tee /root/.forta/config.yml > /dev/null <<EOF
chainId: 250

scan:
  jsonRpc:
    url: ALCHEMY_LINK

trace:
  enabled: false
EOF
```

</TabItem>
</Tabs>
