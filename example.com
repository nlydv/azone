$ORIGIN	example.com.
$TTL 600				; (10m) Recursive resolver cache time

@	IN	SOA	n1.example.com.	neel.example.com. (
			SIGNED_ON	; Serial number
                        3600		; (60m) secondary refresh interval
                        900		; (15m) secondary retry if no reply
                        604800		; (7d)  secondary del zone if no reply
                        300		; (5m)	NXDOMAIN response cache TTL
			)

; Nameservers
@	IN	NS	n1.example.com.
@	IN	NS	n2.example.com.

; Website Records
@	IN	A	10.0.0.1
www	IN	CNAME	example.com.

; Email Records
@	IN	MX	10 mx1.example.com.
@	IN	MX	20 mx2.example.com.
mx1	IN	A	10.0.1.0
mx2	IN	A	10.0.2.0
@	IN	TXT	"v=spf1 mx -all"

; Misc.
_btc	IN	TXT	"btc: bc1q9neel7y34q9eu7ex42sa86dxl6cdujq9ktcxfz"
_eth	IN	TXT	"eth: 0x82aa7f697B9Bc19F286D286D130405c0850A2E7B"
_hns	IN	TXT	"hns: hs1qfywhs02f3ars7zd0uj4ztfnhvsrd34e5s7w2uc"
