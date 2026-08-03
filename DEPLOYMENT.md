# ezzariba.com deployment map

Deploy each directory as its own project, then assign the matching custom domain at the hosting provider.

| Domain | Source directory |
| --- | --- |
| `ezzariba.com` | repository root |
| `novachat.ezzariba.com` | `potfolio Kopie/novachat` |
| `novaflow.ezzariba.com` | `potfolio Kopie/Novaflow` |
| `novalearn.ezzariba.com` | `potfolio Kopie/NovaLearn` |
| `novavoice.ezzariba.com` | `potfolio Kopie/novavoice` |
| `elpolloloco.ezzariba.com` | `potfolio Kopie/EL-Pollo-Loco-main 2` |

For each app, add the domain shown above in the hosting dashboard. The provider will show the exact DNS record (usually CNAME or A) that must be created at the domain registrar. Do not point all subdomains at the root portfolio deployment.
